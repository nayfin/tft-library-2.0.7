import {
  Component,
  Input,
  ViewChild,
  Inject,
  PLATFORM_ID
} from "@angular/core";
import { connectRange } from "instantsearch.js/es/connectors";
import { isPlainObject, noop, omit } from "lodash-es";
import * as noUiSlider from "nouislider";

import { BaseWidget } from "../base-widget";
import { TftInstantSearchInstance } from "../instantsearch/instantsearch-instance";
import { parseNumberInput } from "../utils";

export type RangeSliderState = {
  range: { min: number; max: number };
  refine: Function;
  start: number[];
};

@Component({
  selector: "ng-ais-range-slider",
  template: `
    <div [class]="cx()">
      <ng-ais-header [header]="header" [className]="cx('header')"></ng-ais-header>

      <div [class]="cx('body')">
        <div #sliderContainer></div>
      </div>

      <ng-ais-footer [footer]="footer" [className]="cx('footer')"></ng-ais-footer>
    </div>
  `
})
export class NgAisRangeSlider extends BaseWidget {
  @ViewChild("sliderContainer") public sliderContainer: any;

  // render options
  @Input() public pips: boolean = true;
  @Input() public tooltips: boolean = true;

  // connector options
  @Input() public attributeName: string;
  @Input() public min?: number | string;
  @Input() public max?: number | string;
  @Input() public precision?: number | string = 2;

  public state: RangeSliderState = {
    range: { min: 0, max: 1 },
    refine: noop,
    start: [0, 1]
  };

  private slider: any;

  get step() {
    // compute step from the precision value
    return 1 / Math.pow(10, parseNumberInput(this.precision));
  }

  constructor(
    @Inject(PLATFORM_ID) public platformId: Object,
    searchInstance: TftInstantSearchInstance
  ) {
    super(searchInstance, "RangeSlider");
  }

  public ngOnInit() {
    this.createWidget(connectRange, {
      attributeName: this.attributeName,
      max: parseNumberInput(this.max),
      min: parseNumberInput(this.min),
      precision: parseNumberInput(this.precision)
    });

    super.ngOnInit();
  }

  public updateState = (state: RangeSliderState, isFirstRendering: boolean) => {
    if (isFirstRendering) {
      // create slider
      const config = {
        animate: false,
        behaviour: "snap",
        connect: true,
        range: { min: 0, max: 1 },
        start: [0, 1],
        step: this.step,
        tooltips: this.tooltips && [
          { to: this.formatTooltip },
          { to: this.formatTooltip }
        ]
      };

      if (this.pips === true || typeof this.pips === "undefined") {
        Object.assign(config, {
          pips: {
            density: 3,
            mode: "positions",
            stepped: true,
            values: [0, 50, 100]
          }
        });
      } else if (isPlainObject(this.pips)) {
        Object.assign(config, { pips: this.pips });
      }

      this.slider = noUiSlider.create(
        this.sliderContainer.nativeElement,
        config
      );

      // register listen events
      this.sliderContainer.nativeElement.noUiSlider.on(
        "change",
        this.handleChange
      );
    }

    // update component inner state
    this.state = state;

    // update the slider state
    const { range: { min, max }, start } = state;

    const disabled = min === max;
    const range = disabled ? { min, max: max + 0.0001 } : { min, max };

    this.slider.updateOptions({ disabled, range, start });
  };

  public handleChange = (values: string[] | number[]) => {
    this.state.refine(values);
  };

  public formatTooltip = (value: number) => {
    return value.toFixed(parseNumberInput(this.precision));
  };
}

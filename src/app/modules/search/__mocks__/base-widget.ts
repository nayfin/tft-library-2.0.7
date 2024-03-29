import { Input, OnDestroy, OnInit } from '@angular/core';
import { noop } from 'lodash-es';
import { Widget, Connector } from '../base-widget';
import { TftInstantSearchInstance } from '../instantsearch/instantsearch-instance';
import { bem } from '../utils';

export class BaseWidget implements OnInit, OnDestroy {
  // header footer
  @Input() public header?: string;
  @Input() public footer?: string;

  public widget?: Widget;
  public state?: object;
  public cx?: Function;

  constructor(private searchInstance: TftInstantSearchInstance, widgetName: string) {
    this.cx = bem(widgetName);
  }

  public createWidget(connector: Connector, options: object = {}) {
    // nothind to do, test env
  }

  public ngOnInit() {
    // nothind to do, test env
  }

  public ngOnDestroy() {
    // nothind to do, test env
    // this.widget.dispose({helper: null, state: this.state});
  }

  public updateState = (state, isFirstRendering): Promise<void> | void => {
    this.state = state;
  }
}

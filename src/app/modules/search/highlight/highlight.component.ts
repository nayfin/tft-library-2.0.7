import { Component, Input } from '@angular/core';
import { isPlainObject, escape, get } from 'lodash-es';
import { bem } from '../utils';

@Component({
  selector: 'tft-highlight',
  template: `<span [innerHtml]="content"></span>`
})
export class TftHighlightComponent {
  @Input() attributeName: string;
  @Input() hit: { _highlightResult?: {}; label?: string; highlighted?: string };
  @Input() tagName = 'em';

  cx = bem('Highlight')();

  get content() {
    if (this.attributeName === 'highlighted') {
      return this.hit.highlighted
        ? this.replaceWithTagName(this.hit.highlighted)
        : this.hit.label;
    }

    if (this.hit.hasOwnProperty('_highlightResult')) {
      const attributeHighlighted = get(
        this.hit._highlightResult,
        this.attributeName
      );

      // check that the attributeHighlighted is a string
      if (
        isPlainObject(attributeHighlighted) &&
        typeof attributeHighlighted.value === 'string'
      ) {
        return this.replaceWithTagName(attributeHighlighted.value);
      }
    }

    const fallback = get(this.hit, this.attributeName);
    if (!fallback) {
      console.warn(
        `Could not find attributeName [${
          this.attributeName
        }] into hit object, will display an empty string.`
      );

      return '';
    }

    return fallback;
  }

  replaceWithTagName(value: string) {
    return value
      .replace(new RegExp('<em>', 'g'), `<${this.tagName} class="${this.cx}">`)
      .replace(new RegExp('</em>', 'g'), `</${this.tagName}>`);
  }
}

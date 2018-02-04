import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignModule } from '../../design/design.module';

import { AlgoliaAttributionComponent } from './algolia-attribution.component';

@NgModule({
  imports: [
    CommonModule,
    DesignModule,
  ],
  declarations: [
    AlgoliaAttributionComponent
  ],
  exports: [
    AlgoliaAttributionComponent
  ]
})

export class AlgoliaAttributionModule { }

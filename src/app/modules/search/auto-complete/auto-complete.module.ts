import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignModule } from '../../design/design.module';
import { AutoCompleteComponent } from './auto-complete.component';
import { TftResultsModule } from '../results/results.module';

import { ReactiveFormsModule } from '@angular/forms';
import { AlgoliaAttributionModule } from '../algolia-attribution/algolia-attribution.module';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DesignModule,
    TftResultsModule,
    AlgoliaAttributionModule,
  ],
  declarations: [
    AutoCompleteComponent
  ],
  exports: [
    AutoCompleteComponent
  ]
})
export class TftAutoCompleteModule { }

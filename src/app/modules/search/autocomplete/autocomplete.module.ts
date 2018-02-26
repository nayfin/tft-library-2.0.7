import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignModule } from '../../design/design.module';
import { AutocompleteComponent } from './autocomplete.component';
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
    AutocompleteComponent
  ],
  exports: [
    AutocompleteComponent
  ]
})

export class TftAutocompleteModule { }

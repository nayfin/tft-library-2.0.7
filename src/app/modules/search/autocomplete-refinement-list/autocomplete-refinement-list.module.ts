import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// Internal Modules
import { TftResultsModule } from '../results/results.module';
import { DesignModule } from '../../design/design.module';
// Components
import { AutocompleteRefinementListComponent } from './autocomplete-refinement-list.component';

@NgModule({
  imports: [
    CommonModule,
    DesignModule,
    TftResultsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AutocompleteRefinementListComponent
  ],
  exports: [
    AutocompleteRefinementListComponent
  ],
})
export class TftAutocompleteRefinementListModule { }

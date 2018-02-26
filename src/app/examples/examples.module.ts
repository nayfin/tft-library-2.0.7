import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxExampleComponent } from './search-box-example/search-box-example.component';
import { AutocompleteExampleComponent } from './autocomplete-example/autocomplete-example.component';
import { TftSearchModule } from '../modules/search';
import { DesignModule } from '../modules/design';
// tslint:disable-next-line:max-line-length
import { AutocompleteRefinementListExampleComponent } from './autocomplete-refinement-list-example/autocomplete-refinement-list-example.component';

@NgModule({
  imports: [
    CommonModule,
    DesignModule,
    TftSearchModule,
  ],
  declarations: [
    SearchBoxExampleComponent,
    AutocompleteExampleComponent,
    AutocompleteRefinementListExampleComponent,
  ],
  exports: [
    SearchBoxExampleComponent,
    AutocompleteExampleComponent,
  ],
})
export class ExamplesModule { }

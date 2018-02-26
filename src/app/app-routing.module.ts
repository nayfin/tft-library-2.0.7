import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchBoxExampleComponent } from './examples/search-box-example/search-box-example.component';
import { AutocompleteExampleComponent } from './examples/autocomplete-example/autocomplete-example.component';
// tslint:disable-next-line:max-line-length
import { AutocompleteRefinementListExampleComponent } from './examples/autocomplete-refinement-list-example/autocomplete-refinement-list-example.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'search-box', pathMatch: 'full'},
  { path: 'search-box', component: SearchBoxExampleComponent},
  { path: 'autocomplete', component: AutocompleteExampleComponent},
  { path: 'autocomplete-refinement-list', component: AutocompleteRefinementListExampleComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}

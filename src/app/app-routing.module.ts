import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchBoxExampleComponent } from './modules/examples/search-box-example/search-box-example.component';
import { AutocompleteExampleComponent } from './modules/examples/autocomplete-example/autocomplete-example.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'search-box', pathMatch: 'full'},
  { path: 'search-box', component: SearchBoxExampleComponent},
  { path: 'autocomplete', component: AutocompleteExampleComponent},
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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchBoxExampleComponent } from './modules/examples/search-box-example/search-box-example.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'search-box', pathMatch: 'full'},
  { path: 'search-box', component: SearchBoxExampleComponent},
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

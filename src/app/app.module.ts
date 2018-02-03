import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TftSearchModule } from './modules/search/index';
import { CoreModule } from './modules/core/core.module';
import { DesignModule } from './modules/design/design.module';
import { AppRoutingModule } from './app-routing.module';
// Components
import { SearchBoxExampleComponent } from './modules/examples/search-box-example/search-box-example.component';
import { AutocompleteExampleComponent } from './modules/examples/autocomplete-example/autocomplete-example.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxExampleComponent,
    AutocompleteExampleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    DesignModule,
    TftSearchModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

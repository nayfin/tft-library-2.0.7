import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TftSearchModule } from './modules/search/index';
import { CoreModule } from './modules/core/core.module';
import { SearchBoxExampleComponent } from './modules/examples/search-box-example/search-box-example.component';
import { DesignModule } from './modules/design/design.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxExampleComponent,
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

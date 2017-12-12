import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TftHeaderModule } from './modules/tft-header/tft-header.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TftHeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

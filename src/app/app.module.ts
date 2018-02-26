import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { AppComponent } from './app.component';
import { DesignModule } from './modules/design/design.module';
import { AppRoutingModule } from './app-routing.module';
import { WidgetsModule } from './modules/widgets/widgets.module';
import { CoreModule } from './modules/core/core.module';
import { TftSearchModule } from './modules/search/index';
import { ExamplesModule } from './examples/examples.module';

// config
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    DesignModule,
    TftSearchModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFirestoreModule,
    WidgetsModule,
    ExamplesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

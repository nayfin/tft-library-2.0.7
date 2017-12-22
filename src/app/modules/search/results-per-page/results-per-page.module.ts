import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgAisFooterModule } from '../footer/footer.module';
import { NgAisHeaderModule } from '../header/header.module';
import { TftResultsPerPageComponent } from './results-per-page.component';

@NgModule({
  declarations: [TftResultsPerPageComponent],
  entryComponents: [TftResultsPerPageComponent],
  exports: [TftResultsPerPageComponent],
  imports: [
    CommonModule
  ]
})
export class TftResultsPerPageModule {}

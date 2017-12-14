import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TftHighlightModule } from '../highlight/highlight.module';
import { TftResultsComponent } from './results.component';

@NgModule({
  declarations: [TftResultsComponent],
  entryComponents: [TftResultsComponent],
  exports: [TftResultsComponent],
  imports: [
    CommonModule,
    TftHighlightModule
  ]
})
export class TftResultsModule {}

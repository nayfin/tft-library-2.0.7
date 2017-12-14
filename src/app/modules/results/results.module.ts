import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgAisHighlightModule } from '../highlight/highlight.module';
import { TftResultsComponent } from './results.component';

@NgModule({
  declarations: [TftResultsComponent],
  entryComponents: [TftResultsComponent],
  exports: [TftResultsComponent],
  imports: [
    CommonModule,
    NgAisHighlightModule
  ]
})
export class TftResultsModule {}

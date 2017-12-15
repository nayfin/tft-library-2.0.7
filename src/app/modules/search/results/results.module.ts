import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TftHighlightModule } from '../highlight/highlight.module';
import { TftResultsComponent } from './results.component';
import { DesignModule } from '../../design/design.module';

@NgModule({
  declarations: [TftResultsComponent],
  entryComponents: [TftResultsComponent],
  exports: [TftResultsComponent],
  imports: [
    CommonModule,
    TftHighlightModule,
    DesignModule
  ]
})
export class TftResultsModule {}

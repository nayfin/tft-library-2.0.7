import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DesignModule } from '../../design/design.module';

import { TFTSortByComponent } from './sort-by.component';

@NgModule({
  declarations: [TFTSortByComponent],
  entryComponents: [TFTSortByComponent],
  exports: [TFTSortByComponent],
  imports: [
    CommonModule,
    DesignModule,
  ]
})
export class TftSortByModule {}

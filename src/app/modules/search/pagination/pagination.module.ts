import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TftPaginationComponent } from './pagination.component';
import { DesignModule } from '../../design';

@NgModule({
  declarations: [TftPaginationComponent],
  entryComponents: [TftPaginationComponent],
  exports: [TftPaginationComponent],
  imports: [
    CommonModule,
    DesignModule,
  ]
})
export class TftPaginationModule {}

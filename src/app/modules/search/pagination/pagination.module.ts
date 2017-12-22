import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TftPaginationComponent } from './pagination.component';

import { TftResultsPerPageModule } from '../results-per-page/results-per-page.module';
import { DesignModule } from '../../design/design.module';

@NgModule({
  declarations: [TftPaginationComponent],
  entryComponents: [TftPaginationComponent],
  exports: [TftPaginationComponent],
  imports: [
    TftResultsPerPageModule,
    CommonModule,
    DesignModule,
  ]
})
export class TftPaginationModule {}

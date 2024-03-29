import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { TftHighlightModule } from '../highlight/highlight.module';
import { TftRefinementListComponent } from './refinement-list.component';
import { DesignModule } from '../../design/design.module';
import { TftResultsModule } from '../results/results.module';

@NgModule({
  declarations: [TftRefinementListComponent],
  entryComponents: [TftRefinementListComponent],
  exports: [TftRefinementListComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    DesignModule,
    TftHighlightModule,
    TftResultsModule,
  ]
})
export class TftRefinementListModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TftHighlightModule } from '../highlight/highlight.module';
import { TftRefinementListComponent } from './refinement-list.component';
import { DesignModule } from '../../design/design.module';

@NgModule({
  declarations: [TftRefinementListComponent],
  entryComponents: [TftRefinementListComponent],
  exports: [TftRefinementListComponent],
  imports: [
    FormsModule,
    CommonModule,
    DesignModule,
    TftHighlightModule
  ]
})
export class TftRefinementListModule {}

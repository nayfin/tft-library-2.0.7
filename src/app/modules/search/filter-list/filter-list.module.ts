import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DesignModule } from '../../design/design.module';
import { FilterListComponent } from './filter-list.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    DesignModule,
  ],
  declarations: [
    FilterListComponent
  ],
  exports: [
    FilterListComponent
  ]
})
export class TftFilterListModule { }

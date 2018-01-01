import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignModule } from '../../design/design.module';
import { AutoCompleteComponent } from './auto-complete.component';
import { TftResultsModule } from '../results/results.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DesignModule,
    TftResultsModule,
  ],
  declarations: [
    AutoCompleteComponent
  ],
  exports: [
    AutoCompleteComponent
  ]
})
export class TftAutoCompleteModule { }

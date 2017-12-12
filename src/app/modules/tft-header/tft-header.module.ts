import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TftHeaderComponent } from './tft-header.component';

const HEADER_COMPONENTS = [
  TftHeaderComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: HEADER_COMPONENTS,
  exports: HEADER_COMPONENTS
})
export class TftHeaderModule { }

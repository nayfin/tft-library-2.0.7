import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TftHighlightComponent } from './highlight.component';

@NgModule({
  declarations: [TftHighlightComponent],
  entryComponents: [TftHighlightComponent],
  exports: [TftHighlightComponent],
  imports: [CommonModule]
})
export class TftHighlightModule {}

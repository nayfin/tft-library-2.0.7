import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TftSearchBox } from './search-box';

@NgModule({
  declarations: [TftSearchBox],
  entryComponents: [TftSearchBox],
  exports: [TftSearchBox],
  imports: [CommonModule]
})
export class TftSearchBoxModule {}

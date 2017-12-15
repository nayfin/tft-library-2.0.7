import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TftSearchBoxComponent } from './search-box.component';
import { DesignModule} from '../../design/design.module';

@NgModule({
  declarations: [TftSearchBoxComponent],
  entryComponents: [TftSearchBoxComponent],
  imports: [
    CommonModule,
    DesignModule,
  ],
  exports: [
    TftSearchBoxComponent,
  ],
})
export class TftSearchBoxModule {}

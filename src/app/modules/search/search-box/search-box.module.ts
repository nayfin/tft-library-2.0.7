import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TftSearchBoxComponent } from './search-box.component';
import { DesignModule} from '../../design/design.module';
import { AlgoliaAttributionModule } from '../algolia-attribution/algolia-attribution.module';

@NgModule({
  declarations: [TftSearchBoxComponent],
  entryComponents: [TftSearchBoxComponent],
  imports: [
    CommonModule,
    DesignModule,
    AlgoliaAttributionModule,
  ],
  exports: [
    TftSearchBoxComponent,
  ],
})
export class TftSearchBoxModule {}

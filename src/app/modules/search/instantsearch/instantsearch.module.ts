import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { TftInstantSearchComponent } from './instantsearch.component';
import { TftInstantSearchInstance } from './instantsearch-instance';
import { DesignModule } from '../../design/design.module';

@NgModule({
  declarations: [TftInstantSearchComponent],
  entryComponents: [TftInstantSearchComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [TftInstantSearchComponent],
})
export class TftInstantSearchModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: TftInstantSearchModule,
      providers: [TftInstantSearchInstance]
    };
  }
}

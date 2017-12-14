import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { TftInstantSearchComponent } from './instantsearch.component';
import { TftInstantSearchInstance } from './instantsearch-instance';

@NgModule({
  declarations: [TftInstantSearchComponent],
  entryComponents: [TftInstantSearchComponent],
  exports: [TftInstantSearchComponent],
  imports: [CommonModule, HttpClientModule]
})
export class TftInstantSearchModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: TftInstantSearchModule,
      providers: [TftInstantSearchInstance]
    };
  }
}

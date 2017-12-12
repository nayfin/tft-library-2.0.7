import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { NgAisFooterModule } from "../footer/footer.module";
import { NgAisHeaderModule } from "../header/header.module";
import { NgAisHighlightModule } from "../highlight/highlight.module";
import { NgAisRefinementList } from "./refinement-list";

@NgModule({
  declarations: [NgAisRefinementList],
  entryComponents: [NgAisRefinementList],
  exports: [NgAisRefinementList],
  imports: [
    CommonModule,
    NgAisHeaderModule,
    NgAisFooterModule,
    NgAisHighlightModule
  ]
})
export class NgAisRefinementListModule {}

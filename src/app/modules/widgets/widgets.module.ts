import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from './file-upload/file-upload.module';

@NgModule({
  imports: [
    CommonModule,
    FileUploadModule,
  ],
  exports: [
    FileUploadModule
  ],
  declarations: []
})
export class WidgetsModule { }

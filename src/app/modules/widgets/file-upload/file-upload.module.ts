import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileDropZoneDirective } from './file-drop-zone.directive';
import { FileUploadComponent } from './file-upload.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FileDropZoneDirective,
    FileUploadComponent,
  ]
})
export class FileUploadModule { }

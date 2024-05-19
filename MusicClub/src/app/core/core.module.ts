import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalLoaderComponent } from './global-loader/global-loader.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule, 
    GlobalLoaderComponent,
    SharedModule
  ],
  exports: [
    GlobalLoaderComponent
  ]
})
export class CoreModule { }

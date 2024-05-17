import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';
import { GlobalLoaderComponent } from './global-loader/global-loader.component';

@NgModule({
  declarations: [GlobalLoaderComponent],
  imports: [
    CommonModule, RouterModule, 
  ],
  exports: [
    GlobalLoaderComponent
  ]
})
export class CoreModule { }

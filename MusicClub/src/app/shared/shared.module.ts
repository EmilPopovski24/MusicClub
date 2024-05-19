import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    SpinnerComponent
  ],
  exports: [
    SpinnerComponent
  ]
})
export class SharedModule { }

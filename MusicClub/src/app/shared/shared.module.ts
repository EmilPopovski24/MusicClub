import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { AppEmailDirective } from './validators/email.directive';


@NgModule({
  declarations: [AppEmailDirective],
  imports: [
    CommonModule, 
    SpinnerComponent,
    
  ],
  exports: [
    SpinnerComponent,
    AppEmailDirective
  ]
})
export class SharedModule { }

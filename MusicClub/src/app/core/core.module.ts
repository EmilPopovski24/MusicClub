import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalLoaderComponent } from './global-loader/global-loader.component';
import { SharedModule } from '../shared/shared.module';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule, 
    GlobalLoaderComponent,
    SharedModule,
    NavigationComponent
  ],
  exports: [
    GlobalLoaderComponent,
    NavigationComponent
  ]
})
export class CoreModule { }

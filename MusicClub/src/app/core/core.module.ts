import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [NavigationComponent, FooterComponent],
  imports: [
    CommonModule, RouterModule, 
  ],
  exports: [NavigationComponent, FooterComponent]
})
export class CoreModule { }

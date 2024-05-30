import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [

];

@NgModule({
  declarations: [],
  imports: [RouterModule, //forChild(routes) 
    SharedModule,
    FormsModule,
  ],
  exports: [RouterModule]
})

export class UserRoutingModule { }
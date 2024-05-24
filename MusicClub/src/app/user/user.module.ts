import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
    //canActivate: [AuthActivate]
  }, 
  {
    path: 'user/register',
    component: RegisterComponent
  }, 
  {
    path: 'profile',
    component: ProfileComponent
    // canActivate: [AuthActivate]
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), 
    // RouterLink
  ],
  exports: [RouterModule]
})

export class UserRoutingModule { }
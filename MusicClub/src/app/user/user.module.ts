import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  // {
  //   path: 'login',
  //   component: LoginComponent
  //   //canActivate: [AuthActivate]
  // }, 
  // {
  //   path: 'register',
  //   component: RegisterComponent
  // }, 
  // {
  //   path: 'profile',
  //   component: ProfileComponent
  //   // canActivate: [AuthActivate]
  // },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), 
    // RouterLink
  ],
  exports: [RouterModule]
})

export class UserRoutingModule { }
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: '/home',
  },
  {
    path: '/login',
    pathMatch: "full",
    component: LoginComponent
  },
  {
    path: '/register',
    pathMatch: "full",
    component: RegisterComponent
  }
];

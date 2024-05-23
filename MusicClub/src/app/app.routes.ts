import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    component: HomeComponent,
  },
  {
    path: '',
    pathMatch: "full",
    component: HomeComponent, 
  },
  {
    path: 'catalog',
    pathMatch: "full",
    component: CatalogComponent
  }, 
  {
    path: 'login',
    pathMatch: "full",
    component: LoginComponent
  },
  {
    path: 'register',
    pathMatch: "full",
    component: RegisterComponent
  }
];

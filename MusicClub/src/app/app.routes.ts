import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { LoginComponent } from './user/login/login.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: '/home',
  },
  {
    path: '',
    pathMatch: "full",
    component: HomeComponent
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
  }
];

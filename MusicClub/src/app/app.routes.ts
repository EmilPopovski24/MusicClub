import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AddAlbumComponent } from './add-album/add-album.component';
import { AuthActivate } from './core/guards/auth.activate';


export const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: 'home',
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
    path: 'user/login',
    pathMatch: "full",
    component: LoginComponent
  },
  {
    path: 'user/register',
    pathMatch: "full",
    component: RegisterComponent
  },
  {
    path: 'user/profile',
    pathMatch: "full",
    canActivate: [AuthActivate],
    component: ProfileComponent
  },
  {
    path: 'add-album',
    pathMatch: "full",
    canActivate: [AuthActivate],
    component: AddAlbumComponent
  }
];

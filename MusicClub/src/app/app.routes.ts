import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AddAlbumComponent } from './add-album/add-album.component';
import { AboutComponent } from './about/about.component';
import { AuthActivate } from './core/guards/auth.activate';
import { DetailsComponent } from './details/details.component';

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
    children: [
      {
        path: "",
        pathMatch: "full",
        component: CatalogComponent
      },
      {
        path: ':albumId',
        pathMatch: "full",
        canActivate: [AuthActivate],
        component: DetailsComponent
      }
    ]
  
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
  },
  {
    path: 'profile',
    pathMatch: "full",
    canActivate: [AuthActivate],
    component: ProfileComponent
  },
  {
    path: 'add-album',
    pathMatch: "full",
    canActivate: [AuthActivate],
    component: AddAlbumComponent
  },
  {
    path: 'about',
    pathMatch: "full",
    component: AboutComponent
  },
  

];

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './core/footer/footer.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { CoreModule } from './core/core.module';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserRoutingModule } from './user/user.module';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, 
    HomeComponent, 
    NavigationComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent, 
    CoreModule,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'MusicClub';
}

import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './core/footer/footer.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { CommonModule } from '@angular/common';
import { BackgroundComponent } from './core/background/background.component';
import { CoreModule } from './core/core.module';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticateComponent } from './authenticate/authenticate.component';
// import { DetailsComponent } from './details/details.component';
import { ErrorComponent } from './core/error/error.component';

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
    BackgroundComponent,
    AboutComponent, 
    HttpClientModule,
    AuthenticateComponent, 
    // DetailsComponent, 
    ErrorComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'MusicClub';
}

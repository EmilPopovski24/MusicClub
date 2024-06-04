import { Component } from '@angular/core';
import { LoginComponent } from '../../user/login/login.component';
import { RegisterComponent } from '../../user/register/register.component';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../user/user.service';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../../about/about.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    LoginComponent,
    RegisterComponent,
    RouterModule,
    CommonModule, 
    AboutComponent
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})

export class NavigationComponent {
  constructor(private router:Router, private userService:UserService) {}

  navigateTo(path:string):void {
    this.router.navigate([path])
  }

  logout(): void {
    this.userService.logout().subscribe(() => 
    this.router.navigate(['/login']));
  }

  get isLogged(): boolean {
  return this.userService.isLogged;
  }
  }
  

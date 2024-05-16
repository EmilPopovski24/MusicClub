import { Component } from '@angular/core';
import { LoginComponent } from '../../login/login.component';
import { RegisterComponent } from '../../register/register.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    LoginComponent,
    RegisterComponent
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  constructor(private router:Router) {}
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterModule, CommonModule, CoreModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  constructor( private userService: UserService) {
    
  }
  get isLogged(): boolean {
    return this.userService.isLogged;
    }
}

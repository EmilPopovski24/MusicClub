import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { User } from '../../types/User';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  userList:User[] = [];

  constructor(private userService: UserService) {}
  
  ngOnInit(): void {
    console.log('ui')
    this.userService.fetchUsers().subscribe((users) => {
      this.userList = (users)
    })
  }
}

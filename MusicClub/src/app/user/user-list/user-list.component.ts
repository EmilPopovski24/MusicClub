import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  // standalone: true,
  // imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService) {}
  
  ngOnInit(): void {
    console.log('ui')
    this.userService.fetchUsers().subscribe((users) => {
      console.log(users)
      
    })
  }
}

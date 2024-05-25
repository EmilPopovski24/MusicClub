import { Component } from '@angular/core';
import { FormBuilder, FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, SharedModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {

  // form = this.fb.group({
  //   email: ['emailTest'],
  //   username: ['usernameTest'],
  //   passGroup: this.fb.group({
  //     password:["pass"],
  //     repassword:["pass"]
  //   })
  // })

  constructor(private userService: UserService, private router: Router) {}

  register(form:NgForm) : void {
    if(form.invalid) {
      return;
     }

    console.log(form.value)

   
    this.router.navigate(['/'])
  }
}

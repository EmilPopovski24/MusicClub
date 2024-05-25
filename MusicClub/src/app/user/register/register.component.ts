import { Component } from '@angular/core';
import { FormBuilder, FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';

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

  constructor() {}

  register(form:NgForm) : void {
    if(form.invalid) {
      return;
     }
     
    console.log(form.value)
  }
}

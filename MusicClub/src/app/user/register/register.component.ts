import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {

  form = this.fb.group({
    email: ['emailTest'],
    username: ['usernameTest'],
    passGroup: this.fb.group({
      password:["pass"],
      repassword:["pass"]
    })
  })

  constructor(private fb:FormBuilder) {}

}

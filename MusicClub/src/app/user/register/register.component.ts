import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router} from '@angular/router';
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

  constructor(private userService:UserService, private router:Router){
  }

  register(form:NgForm) {  
    if(form.invalid) {
      return;
    }
      const { email, username, password, repeatPassword} = form.value;
    this.userService.register(email!, username!, password!, repeatPassword!).subscribe(()=>{
      this.router.navigate(['/'])
    })

  }
}



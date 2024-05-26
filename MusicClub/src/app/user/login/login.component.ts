import { Router } from "@angular/router";
import { UserService } from "../user.service";
import { FormsModule, NgForm } from "@angular/forms";
import { Component } from "@angular/core";
import { EMAIL_DOMAINS, SharedModule } from "../../shared/shared.module";
import { CommonModule } from "@angular/common";
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent{
  
        emailDomains = EMAIL_DOMAINS

constructor(private userService:UserService, private router:Router) {}

      login(form:NgForm) {
        if(form.invalid) {
          return;
        }
        const { email, password } = form.value     
        this.userService.login(email, password).subscribe(()=>{
          this.router.navigate(['/'])
        })
  }  
}



// import { Component } from '@angular/core';
// import { UserService } from '../user.service';
// import { Router } from '@angular/router';
// import { FormsModule, NgForm } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { SharedModule } from '../../shared/shared.module';
// import { DEFAULT_EMAIL_DOMAINS } from '../../shared/constatnts';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [FormsModule, CommonModule, SharedModule],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })

// export class LoginComponent {

//   appEmailDomains = DEFAULT_EMAIL_DOMAINS;

//   constructor(private userService: UserService, private router: Router) {}

//   login(form: NgForm): void {
//    if(form.invalid) {
//     return;
//    }
    
//     this.userService.login();
//     this.router.navigate(['/'])
//   }
// }

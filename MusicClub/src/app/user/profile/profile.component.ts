import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormsModule, NgForm, Validators } from '@angular/forms';
import { appEmailValidator } from '../../shared/validators/email-validator';
import { EMAIL_DOMAINS } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { Profile } from '../../types/Profile';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, CommonModule, CoreModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
isEditMode: boolean = false;

profileDetails: Profile = {
    username: '',
    email: '',
}

// form = this.fb.group({
//     username: ["", [Validators.required, Validators.minLength(2)]],
//     email: ["", [Validators.required, appEmailValidator(EMAIL_DOMAINS)]]
// })

    constructor(private fb: FormBuilder,private userService:UserService) {}
    
    ngOnInit(): void {
        const { username, email} = this.userService.user!
        this.profileDetails = {
            username,
            email,
            
        }
        this.form.setValue({
            username,
            email
        })
    }

toggleEditMode(): void {
    this.isEditMode = !this.isEditMode
}

saveProfileHandler(form: NgForm) :void {
    if(this.form.invalid) {
        return;
    }
    this.profileDetails = { ...this.form.value } as Profile;
    const { username, email } = this.profileDetails
    this.userService.updateProfile(username!, email!).subscribe(()=> {
    this.toggleEditMode();
});
}
}
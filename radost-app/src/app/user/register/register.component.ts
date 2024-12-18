import { Component } from '@angular/core';

import { matchingPassValidator } from 'src/app/shared/utils/matchingPassValidator';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
    email: ['', [Validators.required, Validators.pattern('[A-Za-z0-9.-]+@[a-zA-Z0-9.-]+\.(com|bg|org)')]], 
    
    passGroup: this.formBuilder.group(
    {
      password: ['', [Validators.required, Validators.minLength(5)]],
      repassword: ['', [Validators.required]],
    },
    { 
      validators: [matchingPassValidator('password', 'repassword')],
    },
  )

  });

  get passGroup() {
     return this.form.get('passGroup');
 }

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {}


  register() : void {
    if(this.form.invalid) {
      return;
    }


    const { 
      username, 
      email,
      passGroup: { password, repassword } = {},
    } = this.form.value;
  
    this.userService.register(username!, email!, password!, repassword!).subscribe(() => {
      this.router.navigate(['/recipes']);
    })
  }
}

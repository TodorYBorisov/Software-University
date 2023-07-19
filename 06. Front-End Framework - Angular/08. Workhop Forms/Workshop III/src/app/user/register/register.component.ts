import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/shared/validators/email-validator';
import { DEFAULT_DOMAINS } from 'src/app/shared/constants';
import { matchPasswordsValidator } from 'src/app/shared/validators/match-password-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email, emailValidator(DEFAULT_DOMAINS)]],
    tel: ['', [Validators.required]],
    passGroup: this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      rePassword: ['', [Validators.required]],
    }, {

      validators: [matchPasswordsValidator('password','rePassword')]
    })

  })

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  registerHandler(): void {
    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value);

  }




}





// register(firstName: string, email: string, tel: string, password: string, rePassword: string): void {

//   this.userService.register(firstName, email, tel, password, rePassword);
//   this.router.navigate(['/'])
// }
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DEFAULT_DOMAINS } from 'src/app/shared/constants';
import { emailValidator } from 'src/app/shared/validators/email-validator';

interface Profile { //тук си правим един интерфей на обекта
  username: string,
  email: string,
  tel: string
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {

  isEditMode: boolean = false;

  //правим си един профил детаилс
  profileDetails: Profile = {
    username: 'toshko',
    email: 'toshko@gmail.com',
    tel: '885500500'
  };

  form = this.formBuilder.group({ //правим форма група с валидациите
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, emailValidator(DEFAULT_DOMAINS)]],
    tel: ['', [Validators.required]]

  })

  constructor(private formBuilder: FormBuilder) { }

  toggleEditMode(): void {

    this.isEditMode = !this.isEditMode;
  }

  saveProfileHandler(): void {
    if (this.form.invalid) { return };

    //задаваме си променлива да е равна на данните ор формата и те да са от типа на профила
    this.profileDetails = { ...this.form.value } as Profile;



    console.log(this.form.value);


    this.toggleEditMode()
  }
}

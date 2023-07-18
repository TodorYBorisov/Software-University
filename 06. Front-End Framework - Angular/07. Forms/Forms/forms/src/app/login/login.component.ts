import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //друг начин на подаване на данните от формата 2 , НО от submitHandler трябва да се махне loginForm in html
  // @ViewChild('loginForm') loginForm: NgForm | undefined;
  // submitHandler(): void {
  //   if(!this.loginForm) return;

  //   const form =this.loginForm

  //   if (form.invalid) {
  //     return;
  //   }
  //   const value: { email: string, password: string } = form.value;
  //   console.log(value.email);
  //   console.log(value.password);
  // }



  //начин на подаване на данните от формата 1
  submitHandler(form: NgForm): void {

    //ако формата е невалидна
    if (form.invalid) {
      return;
    } 

    //така взимаме данните от формата
    const value: { email: string, password: string } = form.value;
    console.log(value.email);
    console.log(value.password);

    //зачистване на полетата на формата
    form.setValue({ email: '', password: '' })
    form.resetForm();
  }
}

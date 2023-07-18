import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-test',
  templateUrl: './register-test.component.html',
  styleUrls: ['./register-test.component.css']
})
export class RegisterTestComponent {

  registerHandler(registerForm: NgForm): void {

    //ако формата е невалидна
    if (registerForm.invalid) {
      return;
    }

    //така взимаме данните от формата
    const value: { email: string, password: string, rePassword: string } = registerForm.value;
    console.log(value.email);
    console.log(value.password);
    console.log(value.rePassword);

    registerForm.setValue({ email: '', password: '', rePassword: '' })

    //зачистване на полетата на формата
    registerForm.resetForm();
  }
}

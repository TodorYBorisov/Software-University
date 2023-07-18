import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  ngOnInit(): void {
    // this.registerForm.get('email')?.valueChanges.subscribe(console.log); // реагира на промените в полето Input
   }

  registerForm = this.formBuilder.group({

    email: ['', [Validators.required, Validators.email]], //email ни е formControlName
    password: ['',[Validators.required, Validators.minLength(5)]],


  });


  constructor(private formBuilder: FormBuilder) { }

  registerHandler(): void { 
  
  }

  
  
  
}

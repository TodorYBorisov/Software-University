import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DEFAULT_DOMAINS } from 'src/app/shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

appEmailsDomains = DEFAULT_DOMAINS;

  constructor(private userService: UserService , private router: Router) { }

  login(loginForm: NgForm): void {

    //console.log(loginForm.value);
    
    if(loginForm.invalid){
      return;
    }
   
    
    //за сега не оперираме с данните за логването
    this.userService.login();
    this.router.navigate(['/'])
  }

}

import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService: UserService , private router: Router) { }

  login(firstName: string, password: string): void {

    //за сега не оперираме с данните за логването
    this.userService.login(firstName,password);
    this.router.navigate(['/'])
  }

}

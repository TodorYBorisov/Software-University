import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private userService: UserService, private router: Router) { }

  register(username: string, email: string, tel: string, password: string, rePassword: string): void {

    this.userService.register(username, email, tel, password, rePassword);
    this.router.navigate(['/'])
  }
}

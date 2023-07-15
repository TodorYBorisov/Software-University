import { Injectable } from '@angular/core';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User | undefined;
  USER_KEY = '[user]' // това е ключа с който записваме потребителя в LocalStoriga

  //с това проверяваме дали има потребител в localStorige
  get isLogged(): boolean {
    return !!this.user //когато сложим два удиеителни поред променливата ако я има ще върне true, ако ли не , false
  }

  constructor() {
    try {
      const localStorigeUser = localStorage.getItem(this.USER_KEY) || "";

      this.user = JSON.parse(localStorigeUser);


    } catch (error) {
      this.user = undefined;
    }
  }

  login(): void {
    this.user = {
      email: 'toshko@abv.bg',
      firstName: 'toshko'
    };

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user))

  }

  logout(): void {
    this.user = undefined
    localStorage.removeItem(this.USER_KEY)
  }

  register(username: string, email: string, tel: string, password: string, rePassword: string): void {
    
    if (password !== rePassword) {
      console.log('Passwords do not match');
      return;
    }

    // Create the user object
    const user = {
      username: username,
      tel: tel,
      email: email,
      password: password
    };

    // Save the user object in localStorage or send it to the server for registration
    // Example: saving in localStorage
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));

    console.log('Registration successful');
  }
}

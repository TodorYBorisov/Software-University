import { Injectable } from '@angular/core';
import { User } from '../types/user';
const USER_KEY = '[user]'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User | undefined;

  //с това проверяваме дали има потребител в localStorige
  get isLogged(): boolean {
    return !!this.user //когато сложим два удиеителни поред променливата ако я има ще върне true, ако ли не , false
  }

  constructor() {
    try {
      const localStorigeUser = localStorage.getItem(USER_KEY) || "";

      this.user = JSON.parse(localStorigeUser);


    } catch (error) {
      this.user = undefined;
    }
  }
}

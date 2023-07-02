import { Injectable } from '@angular/core';
import { User } from './types/User';

// @Injectable({
//   providedIn: 'root'
// })
export class UserService {

  users: User[] = [
    { name: 'Pesho', age: 20 },
    { name: 'Mitko', age: 23 },
    { name: 'Ivo', age: 26 },
    { name: 'Toshko', age: 30 },
  ]

  constructor() {
    setInterval(() => {
      this.users.push({
        name: 'DemoName',
        age: 0
      })
      //console.log('User has been added!');

    }) //,3000 
  }

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {

    const user = {
      name: inputName.value,
      age: Number(inputAge.value)
    }
    // this.users.push(user)
    this.users = [...this.users, user] // сменяме референцията, за да може да тригърнем чендж детекшъна, презаписваме
    inputName.value = ''
    inputAge.value = ''

  }

  //сървисите няма Lifecycle hooks, те има само един ngOnDestroy
  //идеята му е да зачиства някакви данни


}

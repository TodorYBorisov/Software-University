import { Injectable } from '@angular/core';
import { User } from './types/User';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class UserService {

  users: User[] = []

  constructor(private http: HttpClient) {
    // setInterval(() => {
    //   this.users.push({
    //     name: 'DemoName',
    //     age: 0
    //   })
    //   //console.log('User has been added!');

    // }) //,3000 
  }


  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {

    // const user = {
    //   name: inputName.value,
    //   age: Number(inputAge.value)
    // }
    // // this.users.push(user)
    // this.users = [...this.users, user] // сменяме референцията, за да може да тригърнем чендж детекшъна, презаписваме
    inputName.value = ''
    inputAge.value = ''

  }

  //сървисите няма Lifecycle hooks, те има само един ngOnDestroy
  //идеята му е да зачиства някакви данни

  //fetch data from remoute API
  // async getUsers() {
  //   const result = await fetch('https://jsonplaceholder.typicode.com/users');
  //   return await result.json();
  // }

 getUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users').then((result) => result.json());
  }
}

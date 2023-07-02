import { Component } from '@angular/core';
import { User } from './types/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Demo';

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
    this.users.push(user)
    // this.users = [...this.users, user] // сменяме референцията, за да може да тригърнем чендж детекшъна, презаписваме
    inputName.value = ''
    inputAge.value = ''

  }
}

//dependancy injection example

class Wallet {
  ballance = 0;
  name = ''

  constructor(ballance: number, name: string) {
    this.ballance = ballance
    this.name = name
  }
}
class Car {
  model = '';
  constructor(model: string) {
    this.model = model;

  }
}

// class Person {
//   wallet: Wallet;
//   car:Car;

//   constructor(name:string, balance: number, carModel:string) {
//     this.car = new Car(carModel);
//     this.wallet = new Wallet(name, balance)
//   }
// }


// const personIvan = new Person(4000);
// personIvan.wallet.ballance //4000
// const personMaria = new Person(5000)
// personMaria.wallet.ballance //5000

class PersonBetter {
  wallet: Wallet;
  car: Car;

  constructor(car: Car, wallet: Wallet) {
    this.car = car;
    this.wallet = wallet
  }
}

//инстанцираме всичко отвън и подаваме самите интснации на самите класове
const ivansCar = new Car('BMW');
const ivansWallet = new Wallet(5000, 'Ivan');

const betterPerson = new PersonBetter(ivansCar, ivansWallet)
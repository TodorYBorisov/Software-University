import { Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from './types/User';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'Demo';
  appUsers: User[] = []

  constructor(public userService: UserService) {
    this.appUsers = this.userService.users;
  }

  setUser(inputName: HTMLInputElement, inputAge: HTMLInputElement): void {
    this.userService.addUser(inputName, inputAge)
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

const betterPerson = new PersonBetter(ivansCar, ivansWallet);
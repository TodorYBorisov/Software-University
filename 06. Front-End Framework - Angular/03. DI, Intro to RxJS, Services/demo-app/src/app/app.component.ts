import { Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from './types/User';
import { Observable, interval, map, range, tap } from 'rxjs';


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

//RXJS and Observables
const p = new Promise((resole, reject) => {

  setInterval(() => {
    resole(1200)
  }, 4000);
});

//асинхронен промис... изчаква резултата от асинхронната функция и го обработва след това
Promise.resolve(100)
  .then((d) => d * 10)
  .then((x) => console.log('From promise', x)
  );

//синхронна аналогия с Обзървабълс
[1, 2, 3, 4].map((x) => x * 2).map((x) => x * 10);


//асинхронна аналогия Observable

// function interval(inatervalValue: number) {

//   return new Observable<number>((observer) => {
//     // observer.next(1000);
//     // observer.next(2000);
//     // observer.next(3000);

//     let counter = 0;
//     const timer = setInterval(() => {
//       observer.next(counter++);
//       observer.complete();
//     }, inatervalValue)
    
//това го извикваме когато искаме да премахнем нещо
//     return () => {
//       clearInterval(timer);
//       observer.unsubscribe();
//     }
//   });
// }

const stream$ = interval(3000).pipe(map((x) => x * 2));

setTimeout(() => {
  stream$.subscribe({
    next: (x) => console.log('data', x),
    error: (error) => console.log(`Error occured ${error}`),
    complete: () => console.log('Stream has been completed'),

  });

}, 3000);

const obs = range(1, 10)
  .pipe(
    tap(i => console.log(`Hello: ${i}`))
  );
//с pipe можем да модифицираме данните на потока преди да се събскрайабнем за него

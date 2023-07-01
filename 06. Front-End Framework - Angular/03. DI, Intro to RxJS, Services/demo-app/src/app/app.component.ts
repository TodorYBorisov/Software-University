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

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    
    const user = {
      name: inputName.value,
      age: Number(inputAge.value)
    }
    this.users.push(user)

    inputName.value=''
    inputAge.value=''

  }
}

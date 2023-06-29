import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Title from Appcomponent!';

  users = [
    { name: 'Mitko', age: 21 },
    { name: 'Ivo', age: 18 },
    { name: 'Toshko', age: 25 }
  ]

  outputChiledHandler(){
    console.log('outputChiledHandler');
    
  }
}

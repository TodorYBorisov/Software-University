import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This text is from app main app componet!';

  users = [
    { name: 'Mitko', age: 21 },
    { name: 'Ivo', age: 18 },
    { name: 'Toshko', age: 25 }
  ]

  outputChiledHandler(){
    console.log('outputChiledHandler');
    
  }
}

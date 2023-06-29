import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  activeUsers = [
    { name: 'Mitko', age: 21 },
    { name: 'Ivo', age: 18 },
    { name: 'Toshko', age: 25 }
  ]

  isActive = false;
  inputValue ='Hello'

  ngOnInit(): void {
    console.log('Navigation->created');
    
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
    

  }


  onClick(event:Event): void {
    console.log({event});

    //...args: number[] така подаваме аргументи в ивента
    
    this.isActive = !this.isActive;
  }
}

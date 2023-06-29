import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input('title') titleFromApp: string='';
  @Input('activeUsers') activeUsers: {name:string, age:number}[]=[];
  @Output() onChildOutput = new EventEmitter<boolean>();

  isActive = false;
  inputValue ='Hello'

  ngOnInit(): void {
    console.log('Navigation->created');
  }

  ngOnChanges(changes: SimpleChanges){

  }


  onClick(event:Event): void {
    //...args: number[] така подаваме аргументи в ивента
    this.isActive = !this.isActive;
    this.onChildOutput.emit(this.isActive)
  }
}

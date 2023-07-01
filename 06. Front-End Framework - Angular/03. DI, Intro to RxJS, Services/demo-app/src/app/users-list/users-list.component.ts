import { Component, Input } from '@angular/core';
import { User } from '../types/User';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {

  @Input() users: User[] =[];

}
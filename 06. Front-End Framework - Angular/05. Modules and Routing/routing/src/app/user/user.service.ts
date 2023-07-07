import { Injectable, OnInit } from '@angular/core';
import { User } from '../types/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  fetchUsers() {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }
}

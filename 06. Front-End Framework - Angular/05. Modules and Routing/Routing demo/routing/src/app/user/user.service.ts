import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { User } from '../types/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  
  fetchUsers() {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

}

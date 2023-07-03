import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClientModule) { }

  getThemes() {
    return this.http.get
  }
  
  getPosts() {
    return this.http.get
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getThemes() {
    const { appUrl } = environment;
    return this.http.get(`${appUrl}/themes`)
  }

  //ако искаме да имаме лимит колко поста да ни връща от базата правим условието в return
  getPosts(limit?: number) {
    //return this.http.get(environment.appUrl)
    const { appUrl } = environment;
    const limitFilter = limit ? `?limit=${limit}` : '';

    return this.http.get(`${appUrl}/posts${limitFilter}`);
  }
}

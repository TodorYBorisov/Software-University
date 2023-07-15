import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Theme } from './types/theme';
import { Post } from './types/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  //така дърпаме всички теми от апи-то
  getThemes() {
    const { appUrl } = environment;
    return this.http.get<Theme[]>(`${appUrl}/themes`);
  }

  //така дърпаме единична тема по нейното id 
  getTheme(id: string) {
    const { appUrl } = environment;
    return this.http.get<Theme>(`${appUrl}/themes/${id}`);
  }


  //ако искаме да имаме лимит колко поста да ни връща от базата правим условието в return
  getPosts(limit?: number) {
    //return this.http.get(environment.appUrl)
    const { appUrl } = environment;
    const limitFilter = limit ? `?limit=${limit}` : '';

    return this.http.get<Post[]>(`${appUrl}/posts${limitFilter}`);
  }
}

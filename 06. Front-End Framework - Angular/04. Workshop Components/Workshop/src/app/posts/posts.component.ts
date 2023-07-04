import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../types/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postsList: Post[] = [];
  isLoading: boolean = true;
  thereAreNoPosts: boolean = false //ако постовете свършат

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getPosts(5).subscribe(
      {
        next: (posts) => {
          this.postsList = posts //тук ги присвояваме от потока към които сме се закачили
          this.isLoading = false

          if (this.postsList.length === 0) {
            this.thereAreNoPosts = true
          }
        },
        error: (error) => {
          this.isLoading = false,
            console.log(`Error: ${error}`);
        }
      });
  }
}
 //console.log(posts); //тук може да му сложим {} за да може да го копираме като обект,за да го копираме от конзолата
//  this.postsList = posts
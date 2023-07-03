import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getPosts(5).subscribe((posts) => {
      console.log(posts); //тук може да му сложим {} за да може да го копираме като обект,за да го копираме от конзолата

    })
  }
}

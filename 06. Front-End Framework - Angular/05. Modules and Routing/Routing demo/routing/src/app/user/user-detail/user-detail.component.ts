import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) {

    console.log('идва от snapshot.data', this.activeRoute.snapshot.data['user']);
    
    this.activeRoute.params.subscribe((v) => console.log('идва от params.subscribe', v));
    // console.log('идва от snapshot.url', this.activeRoute.snapshot.url);
    // console.log('идва от snapshot.title', this.activeRoute.snapshot.title);

  }

  ngOnInit(): void { }
}

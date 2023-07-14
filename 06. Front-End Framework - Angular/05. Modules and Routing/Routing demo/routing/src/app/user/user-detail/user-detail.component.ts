import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

  constructor(private activeRoute: ActivatedRoute) {
    
    //static way отговаря за статични данни
    console.log('идва от snapshot.data', this.activeRoute.snapshot.data['user']);
    //const id = this.activeRoute.snapshot.params['id']
    
    //dynamic way
    this.activeRoute.params.subscribe((v) => console.log('идва от params.subscribe', v));
    //може да взимаме самото id примерно

    //ngOnInit(){
    //   this.activeRoute.params.subscribe((params:Params)=>{
    //     const id = params['id']
    //   })
    // }
    
    
    // console.log('идва от snapshot.url', this.activeRoute.snapshot.url);
    // console.log('идва от snapshot.title', this.activeRoute.snapshot.title);

  }

}

import { Component, OnInit } from '@angular/core';
import { interval, map } from 'rxjs';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  user = { name: 'Pesho', age: '12', list: [1, 2, 3, 4, 5, 6, 7, 8,] };


  sum(a: number, b: number): number {
    return a + b;
  }

  addProperty(): void {
    (this.user as any)['test123'] = 'test123';

    console.log(this.user);

  }

  time$ = interval(1000).pipe(map(() => new Date()));

  users$ = this.authService.userObject$;
  isLoadingUsers$ = this.authService.isLoadingUsers$;


  constructor(private authService: AuthService) { }

  reloadUsers(): void {
    this.authService.loadUsers();
  }



  ngOnInit(): void {

    // this.authService.loadUsers().subscribe({
    //     next: console.log,
    //     error: (error)=>{
    //       console.log(`Error from appComponent ${error}`);

    //     }
    //   }); 
  }
}

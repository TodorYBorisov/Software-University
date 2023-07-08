import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/app/types/User';
import { GlobalLoaderService } from 'src/app/core/global-loader/global-loader.service';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: User[] = [];

  constructor(
    private userService: UserService,
    private globalLoaderService: GlobalLoaderService) { }

    //Toва е правилният начин с error handling
    ngOnInit(): void {
      
      this.globalLoaderService.showLoader();
      
      // setTimeout(() => {
        
        this.userService.fetchUsers().subscribe({
          next: (users) => {
            this.userList = users;
            this.globalLoaderService.hideLoader()
          },
          error: (error) => {
            console.error(`Error: ${error}`);
            this.globalLoaderService.hideLoader();
          }
        });
      // }, 1000);
    }
    
    // ngOnInit(): void {
  
    //   this.globalLoaderService.showLoader()
  
    //   //така тестваме лоудара дали се показва на 1 сек преди да се заредят данните
    //   // setTimeout(() => {
  
    //   this.userService.fetchUsers().subscribe((users) => {
    //     this.userList = users
    //     this.globalLoaderService.hideLoader()
    //   });
  
    //   this.userService.fetchUsers().subscribe((users) => {
    //     this.userList = users
    //     //console.log(users);
  
    //     this.globalLoaderService.hideLoader();
    //   });
  
    //   // },1000);
    // }
  }
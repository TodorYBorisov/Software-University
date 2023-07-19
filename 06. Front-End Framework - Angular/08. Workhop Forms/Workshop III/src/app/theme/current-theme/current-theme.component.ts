import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';
import { UserService } from 'src/app/user/user.service';


@Component({
  selector: 'app-current-theme',
  templateUrl: './current-theme.component.html',
  styleUrls: ['./current-theme.component.css']
})
export class CurrentThemeComponent implements OnInit {

  theme: Theme | undefined;
  isLoading: boolean = true;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService) { }

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.params['themeId'];


    this.apiService.getTheme(id).subscribe(
      {
        next: (theme) => {
          this.theme = theme //тук ги присвояваме от потока към които сме се закачили
          this.isLoading = false

          console.log({ theme }); //провери дали идва единичната тема само


          // if (this.themesList.length === 0) { //правим проверка за броя на темите
          //   this.thereAreNoThemes = true;
          // }

        },
        error: (error) => {
          this.isLoading = false,
            console.log(`Error: ${error}`);
        }
      });
  }
}
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from '../types/theme';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit {

  themesList: Theme[] = []; // сетваме themeList за да може да ги *ngFor-нем
  isLoading: boolean = true; //правим си една променлива която я добавяме долу когато дойдат данните
  // thereAreNoThemes: boolean = false // ако няма повече теми

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getThemes().subscribe(
      {
        next: (themes) => {
          this.themesList = themes //тук ги присвояваме от потока към които сме се закачили
          this.isLoading = false
          
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

// (themes) => {
//   //console.log(themes); //тук може да му сложим {} за да може да го копираме като обект,за да го копираме от конзолата
//   //console.log(themes[0]) може да си притнем една картичка, за да видим какви са пропъртитата

//   next: () => {
//     this.themesList = themes //тук ги присвояваме от потока към които сме се закачили
//     this.isLoading = false
//   }
// }
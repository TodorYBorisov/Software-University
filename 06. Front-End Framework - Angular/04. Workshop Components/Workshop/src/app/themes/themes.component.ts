import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { of } from 'rxjs';
import { Theme } from '../types/theme';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit {

  themesList: Theme[] = [];// сетваме themeList за да може да ги *ngFor-нем

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getThemes().subscribe((themes) => {
      //console.log(themes[0]); //тук може да му сложим {} за да може да го копираме като обект,за да го копираме от конзолата

      this.themesList = themes //тук ги присвояваме от потока към които сме се закачили

    })
  }

}

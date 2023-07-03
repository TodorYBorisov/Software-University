import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getThemes().subscribe((themes) => {
      console.log(themes); //тук може да му сложим {} за да може да го копираме като обект,за да го копираме от конзолата

    })
  }

}

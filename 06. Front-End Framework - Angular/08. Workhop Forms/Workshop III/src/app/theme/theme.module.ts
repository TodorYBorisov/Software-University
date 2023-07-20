import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { themeRoutingModule } from './theme-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NewThemeComponent,
    CurrentThemeComponent, 
  ],
  imports: [
    CommonModule,
    themeRoutingModule,
    FormsModule
  ]
})
export class ThemeModule { }

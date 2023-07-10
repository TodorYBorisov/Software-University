import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  //експортваме тези два под модула от core модула
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }

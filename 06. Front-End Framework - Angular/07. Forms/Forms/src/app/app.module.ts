import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlitOnMoveDirective } from './highlit-on-move.directive';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyRouterLinkDirective } from './my-router-link.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HighlitOnMoveDirective,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MyRouterLinkDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //за темплейт дривън форми пишем в html
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

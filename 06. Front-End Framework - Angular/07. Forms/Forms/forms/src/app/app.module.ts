import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightOnMoveDirective } from './highlight-on-move.directive';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyRouterLinkDirective } from './my-router-link.directive';
import { MyStructuralDirective } from './my-structural.directive';
import { PlaygroundComponent } from './playground/playground.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterTestComponent } from './register-test/register-test.component';



@NgModule({
  declarations: [
    AppComponent,
    HighlightOnMoveDirective,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MyStructuralDirective,
    MyRouterLinkDirective,
    PlaygroundComponent,
    RegisterTestComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //това е за темплейт дривън формите
    ReactiveFormsModule, //това е за  реактивните форми
    BrowserAnimationsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

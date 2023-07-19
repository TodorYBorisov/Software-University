import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { userRoutingModule } from './user-routing.module';





@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    userRoutingModule
   
    
  
  ],
  exports: [
    LoginComponent,
    ProfileComponent,
    RegisterComponent
  ]
})
export class UserModule { }

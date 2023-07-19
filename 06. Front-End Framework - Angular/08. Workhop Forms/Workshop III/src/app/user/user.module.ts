import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { userRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';





@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    userRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    
    
   
    
  
  ],
  exports: [
    LoginComponent,
    ProfileComponent,
    RegisterComponent
  ]
})
export class UserModule { }

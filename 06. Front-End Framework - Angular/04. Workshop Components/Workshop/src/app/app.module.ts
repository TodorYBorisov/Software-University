import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainComponent } from './main/main.component';
import { ThemesComponent } from './themes/themes.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule} from '@angular/common/http' //добавяме този модул, за да може да fetch from API
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ThemesComponent,
    PostsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

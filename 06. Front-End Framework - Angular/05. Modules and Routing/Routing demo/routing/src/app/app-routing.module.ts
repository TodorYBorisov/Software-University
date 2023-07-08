import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';


const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'todo-list' },
  // { path: 'user-list', component: UserListComponent },

  { path: '', pathMatch: 'full', redirectTo: 'user/list' },
 
  { path: 'todo-list', component: TodoListComponent },
  // { path: '**', component: PageNotFoundComponent },
 

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

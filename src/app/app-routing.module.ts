import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { UsersListComponent } from './users/users-list/users-list.component';


const routes: Routes = [
  {path: 'users-list',component: UsersListComponent}, 
  {path: 'post-list', component: PostListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

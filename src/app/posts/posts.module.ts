import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { TituloComponent } from '../titulo/titulo.component';



@NgModule({
  declarations: [
    PostListComponent,
    TituloComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PostsModule { }

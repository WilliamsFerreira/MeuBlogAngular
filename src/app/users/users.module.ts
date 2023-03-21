import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { TituloComponent } from '../titulo/titulo.component';



@NgModule({
  declarations: [
    UsersListComponent,
    TituloComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }

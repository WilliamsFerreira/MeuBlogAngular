import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeubotaoComponent } from './meubotao/meubotao.component';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    MeubotaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    PostsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

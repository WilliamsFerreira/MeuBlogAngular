import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeubotaoComponent } from './meubotao/meubotao.component';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { TituloComponent } from './titulo/titulo.component';

@NgModule({
  declarations: [
    AppComponent,
    MeubotaoComponent,
    TituloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    PostsModule
  ],
  exports: [
    TituloComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

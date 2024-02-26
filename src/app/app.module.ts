import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CBookListComponent } from './c-book-list/c-book-list.component';
import { CAddBookComponent } from './c-add-book/c-add-book.component';

@NgModule({
  declarations: [
    AppComponent,
    CBookListComponent,
    CAddBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

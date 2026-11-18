import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoCRUDComponent } from './shared/components/todo-crud/todo-crud.component';
import { TodoCRUD1Component } from './shared/components/todo-crud/todo-crud1/todo-crud1.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar'

@NgModule({
  declarations: [
    AppComponent,
    TodoCRUDComponent,
    TodoCRUD1Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

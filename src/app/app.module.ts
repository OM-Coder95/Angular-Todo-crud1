import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoCRUDComponent } from './shared/components/todo-crud/todo-crud.component';
import { TodoCRUD1Component } from './shared/components/todo-crud/todo-crud1/todo-crud1.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TodoCrud2Component } from './shared/components/todo-crud/todo-crud2/todo-crud2.component';
import { StudentCrudComponent } from './shared/components/student-crud/student-crud.component';
import { StudentCrud1Component } from './shared/components/student-crud/student-crud1/student-crud1.component';
import { PostCrudComponent } from './shared/components/post-crud/post-crud.component';
import { PostCrud1Component } from './shared/components/post-crud/post-crud1/post-crud1.component';
import { TodoCrud3Component } from './shared/components/todo-crud/todo-curd3/todo-curd3.component';
import { StudentCrud2Component } from './shared/components/student-crud/student-crud2/student-crud2.component';
import { MobileCrudComponent } from './shared/components/mobile-crud/mobile-crud.component';
import { MobileCrud1Component } from './shared/components/mobile-crud/mobile-crud1/mobile-crud1.component'

@NgModule({
  declarations: [
    AppComponent,
    TodoCRUDComponent,
    TodoCRUD1Component,
    TodoCrud2Component,
    StudentCrudComponent,
    StudentCrud1Component,
    PostCrudComponent,
    PostCrud1Component,
    TodoCrud3Component,
    StudentCrud2Component,
    MobileCrudComponent,
    MobileCrud1Component
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

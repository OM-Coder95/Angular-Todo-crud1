import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Itodo } from 'src/app/shared/models/todo';

@Component({
  selector: 'app-todo-crud3',
  templateUrl: './todo-curd3.component.html',
  styleUrls: ['./todo-curd3.component.scss']
})
export class TodoCrud3Component implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  todoArr: Array<Itodo> = [
    {
      todoId: '101',
      todoItem: 'Learn Angular',
      isCompleted: false
    },
    {
      todoId: '102',
      todoItem: 'Practice JavaScript',
      isCompleted: true
    },
    {
      todoId: '103',
      todoItem: 'Learn Node.js',
      isCompleted: false
    },
    {
      todoId: '104',
      todoItem: 'Practice TypeScript',
      isCompleted: true
    },
    {
      todoId: '105',
      todoItem: 'Complete Todo CRUD',
      isCompleted: false
    }
  ];

  isInEditMode: boolean = false;
  editId !: string;

  trackById(index: number, todo: Itodo) {
    return todo.todoId;
  }

  @ViewChild("nameRef") _nameRef !: ElementRef;
  @ViewChild("isCompletedRef") _isCompletedRef !: ElementRef;

  onTodoAdd() {
    let newTodo = {
      todoId: Date.now().toString(),
      todoItem: this._nameRef.nativeElement.value,
      isCompleted: this._isCompletedRef.nativeElement.value === 'yes' ? true : false
    }
    this.todoArr.push(newTodo);
    this._nameRef.nativeElement.value = ''
  }

  onTodoEdit(todo: Itodo) {
    this._nameRef.nativeElement.value = todo.todoItem,
      this._isCompletedRef.nativeElement.value = todo.isCompleted ? 'yes' : 'no'

    this.isInEditMode = true;
    this.editId = todo.todoId;
  }

  onTodoUpdate() {
    let updateId = this.editId;

    let updatedObj = {
      todoId: updateId,
      todoItem: this._nameRef.nativeElement.value,
      isCompleted: this._isCompletedRef.nativeElement.value === 'yes' ? true : false
    }

    let getIndex = this.todoArr.findIndex(t => t.todoId === updateId);
    this.todoArr[getIndex] = updatedObj;

    this._nameRef.nativeElement.value = ''
    this.isInEditMode = false;
    this.editId = ''
  }

  onTodoDelete(deleteId: string) {
    let getConfirm = confirm(`Are you sure, that you want to delete this todo with id ${deleteId}`)

    if (getConfirm) {
      let getIndex = this.todoArr.findIndex(todo => todo.todoId === deleteId)
      this.todoArr.splice(getIndex, 1)
    }

  }

  constructor() { }



}


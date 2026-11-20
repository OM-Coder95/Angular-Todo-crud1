import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Itodo } from 'src/app/shared/models/todo';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { UniqueIdService } from 'src/app/shared/services/unique-id.service';

@Component({
  selector: 'app-todo-crud2',
  templateUrl: './todo-crud2.component.html',
  styleUrls: ['./todo-crud2.component.scss']
})
export class TodoCrud2Component implements OnInit {

  isInEditMode: boolean = false;
  edidId !: string;

  trackById(index : number, todo : Itodo) {
    return todo.todoId;
  }
  
  todoArr: Itodo[] = [
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

  @ViewChild('todoInputRef') _todoInput !: ElementRef;
  @ViewChild('isCompletedRef') _isCompleted !: ElementRef;


  onTodoAdd() {
    let todoObj = {
      todoItem: this._todoInput.nativeElement.value,
      isCompleted: this._isCompleted.nativeElement.value === 'yes' ? true : false,
      todoId: this._uniqueId.generateId()
    }

    this.todoArr.push(todoObj);
    this._todoInput.nativeElement.value = ""
    this._snackbar.showSuccess('Todo Added successfully');
  }

  onTodoEdit(todo: Itodo) {
    this._todoInput.nativeElement.value = todo.todoItem;
    this._isCompleted.nativeElement.value = todo.isCompleted ? 'yes' : 'no'
    this.isInEditMode = true;
    this.edidId = todo.todoId;
  }

  onTodoUpdate() {
    let updateId = this.edidId;

    let updatedObj = {
      todoItem: this._todoInput.nativeElement.value,
      isCompleted: this._isCompleted.nativeElement.value === 'yes' ? true : false,
      todoId: updateId
    }

    let getIndex = this.todoArr.findIndex(t => t.todoId === updateId);
    this.todoArr[getIndex] = updatedObj;
    this._snackbar.showSuccess(`Todo is Updated Successfully with id ${updateId}`)
    this.edidId = '';
    this.isInEditMode = false;
    this._todoInput.nativeElement.value = ''

  }

  onTodoDelete(todoId: string) {
    const getConfirm = confirm(`Are you surr, you want to delete this todo with id ${todoId}?`)
    if (getConfirm) {
      let getIndex = this.todoArr.findIndex(t => t.todoId === todoId);
      this.todoArr.splice(getIndex, 1);

      this._snackbar.showSuccess(`Todo Deleted successfully with id ${todoId}`);
    }
  }

  onCompletedChange(tId: string, eve: Event) {
    let checkbox = eve.target as HTMLInputElement;
    let todo = this.todoArr.find(t => t.todoId === tId);

    if (todo) {
      todo.isCompleted = checkbox.checked;
    }
  }

  constructor(private _uniqueId: UniqueIdService, private _snackbar: SnackbarService) { }

  ngOnInit(): void {
  }

}

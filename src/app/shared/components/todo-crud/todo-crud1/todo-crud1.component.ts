import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { get } from 'http';
import { Itodo } from 'src/app/shared/models/todo';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { UniqueIdService } from 'src/app/shared/services/unique-id.service';

@Component({
  selector: 'app-todo-crud1',
  templateUrl: './todo-crud1.component.html',
  styleUrls: ['./todo-crud1.component.scss']
})
export class TodoCRUD1Component implements OnInit {

  constructor(private _uniqueIdService: UniqueIdService, private _snackBar: SnackbarService) { }

  todoArr: Array<Itodo> = [
    {
      todoItem: 'Learn Angular',
      isCompleted: true,
      todoId: '101'
    },
    {
      todoItem: 'Practice TypeScript',
      isCompleted: false,
      todoId: '102'
    },
    {
      todoItem: 'Create Todo CRUD',
      isCompleted: true,
      todoId: '103'
    },
    {
      todoItem: 'Learn REST API',
      isCompleted: false,
      todoId: '104'
    },
    {
      todoItem: 'Prepare for Interview',
      isCompleted: true,
      todoId: '105'
    }
  ];

  @ViewChild("todoInput") todoInput !: ElementRef<HTMLInputElement>;
  @ViewChild("isCompletedRef") isCompletedRef !: ElementRef<HTMLSelectElement>;

  isInEditMode: boolean = false;
  private editId !: string;

  onAddTodo() {
    let todoObj = {
      todoItem: this.todoInput.nativeElement.value,
      isCompleted: this.isCompletedRef.nativeElement.value === 'yes',
      todoId: this._uniqueIdService.generateId()
    }

    this.todoArr.push(todoObj);
    this.todoInput.nativeElement.value = "";
    this._snackBar.showSuccess('Todo added successfully');
  }

  onEditActive(todo: Itodo) {
    this.todoInput.nativeElement.value = todo.todoItem;
    this.isCompletedRef.nativeElement.value = todo.isCompleted ? 'yes' : 'no';
    this.isInEditMode = true;
    this.editId = todo.todoId;
  }

  onTodoUpdate() {

    let updatedObj = {
      todoItem: this.todoInput.nativeElement.value,
      isCompleted: this.isCompletedRef.nativeElement.value === 'yes',
      todoId: this.editId
    }

    let getIndex = this.todoArr.findIndex(todo => todo.todoId === this.editId);

    if (getIndex === -1) {
      this._snackBar.showError('Todo Not Found');
      return;
    }
    this.todoArr[getIndex] = updatedObj;
    this._snackBar.showSuccess('Todo Updated Successfully');
    this.todoInput.nativeElement.value = "";
    this.isInEditMode = false;
  }

  onTodoDelete(todoId: string) {

    let getConfirm = confirm(`Are you sure, You want to delete the Todo with id ${todoId}`);
    if (getConfirm) {
      let getIndex = this.todoArr.findIndex(todo => todo.todoId === todoId);

      if (getIndex === -1) {
        this._snackBar.showError('Todo Not Found');
        return
      }
      this.todoArr.splice(getIndex, 1);
      this._snackBar.showSuccess('Todo Delete successfully');
    }
  }

  completedStateChange(todoId: string, eve: Event) {
    let checkbox = eve.target as HTMLInputElement;
    let todo = this.todoArr.find(t => t.todoId === todoId);

    if (todo) {
      todo.isCompleted = checkbox.checked;
    }
  }

  ngOnInit(): void {
  }

}

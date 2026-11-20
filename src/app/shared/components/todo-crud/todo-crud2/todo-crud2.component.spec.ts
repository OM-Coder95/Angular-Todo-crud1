import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCrud2Component } from './todo-crud2.component';

describe('TodoCrud2Component', () => {
  let component: TodoCrud2Component;
  let fixture: ComponentFixture<TodoCrud2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoCrud2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoCrud2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

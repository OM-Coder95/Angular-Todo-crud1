import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCRUD1Component } from './todo-crud1.component';

describe('TodoCRUD1Component', () => {
  let component: TodoCRUD1Component;
  let fixture: ComponentFixture<TodoCRUD1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoCRUD1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoCRUD1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

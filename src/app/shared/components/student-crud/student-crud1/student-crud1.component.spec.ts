import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCrud1Component } from './student-crud1.component';

describe('StudentCrud1Component', () => {
  let component: StudentCrud1Component;
  let fixture: ComponentFixture<StudentCrud1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentCrud1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentCrud1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

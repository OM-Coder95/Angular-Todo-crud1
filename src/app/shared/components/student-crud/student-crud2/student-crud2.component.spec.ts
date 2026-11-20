import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCrud2Component } from './student-crud2.component';

describe('StudentCrud2Component', () => {
  let component: StudentCrud2Component;
  let fixture: ComponentFixture<StudentCrud2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentCrud2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentCrud2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

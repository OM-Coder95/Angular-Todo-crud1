import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCrudComponent } from './mobile-crud.component';

describe('MobileCrudComponent', () => {
  let component: MobileCrudComponent;
  let fixture: ComponentFixture<MobileCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCrud1Component } from './mobile-crud1.component';

describe('MobileCrud1Component', () => {
  let component: MobileCrud1Component;
  let fixture: ComponentFixture<MobileCrud1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileCrud1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileCrud1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

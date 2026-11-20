import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCrud1Component } from './post-crud1.component';

describe('PostCrud1Component', () => {
  let component: PostCrud1Component;
  let fixture: ComponentFixture<PostCrud1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCrud1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCrud1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

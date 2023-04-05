import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnAttrDirectiveComponent } from './learn-attr-directive.component';

describe('LearnAttrDirectiveComponent', () => {
  let component: LearnAttrDirectiveComponent;
  let fixture: ComponentFixture<LearnAttrDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnAttrDirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnAttrDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

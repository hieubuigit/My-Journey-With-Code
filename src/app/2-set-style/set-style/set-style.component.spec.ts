import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetStyleComponent } from './set-style.component';

describe('SetStyleComponent', () => {
  let component: SetStyleComponent;
  let fixture: ComponentFixture<SetStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

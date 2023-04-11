import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLearnFormComponent } from './my-learn-form.component';

describe('MyLearnFormComponent', () => {
  let component: MyLearnFormComponent;
  let fixture: ComponentFixture<MyLearnFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLearnFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLearnFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

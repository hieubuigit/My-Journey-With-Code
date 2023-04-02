import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrClassStyleComponent } from './attr-class-style.component';

describe('AttrClassStyleComponent', () => {
  let component: AttrClassStyleComponent;
  let fixture: ComponentFixture<AttrClassStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttrClassStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttrClassStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

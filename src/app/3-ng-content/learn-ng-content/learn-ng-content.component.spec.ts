import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnNgContentComponent } from './learn-ng-content.component';

describe('LearnNgContentComponent', () => {
  let component: LearnNgContentComponent;
  let fixture: ComponentFixture<LearnNgContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnNgContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnNgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

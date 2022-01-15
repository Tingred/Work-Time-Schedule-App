import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleScheduleComponent } from './single-schedule.component';

describe('SingleScheduleComponent', () => {
  let component: SingleScheduleComponent;
  let fixture: ComponentFixture<SingleScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

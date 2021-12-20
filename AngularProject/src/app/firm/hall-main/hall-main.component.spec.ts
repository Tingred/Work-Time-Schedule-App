import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HallMainComponent } from './hall-main.component';

describe('HallMainComponent', () => {
  let component: HallMainComponent;
  let fixture: ComponentFixture<HallMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HallMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HallMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkplaceMainComponent } from './workplace-main.component';

describe('WorkplaceMainComponent', () => {
  let component: WorkplaceMainComponent;
  let fixture: ComponentFixture<WorkplaceMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkplaceMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkplaceMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

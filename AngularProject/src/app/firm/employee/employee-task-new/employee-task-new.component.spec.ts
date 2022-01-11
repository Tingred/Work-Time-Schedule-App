import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTaskNewComponent } from './employee-task-new.component';

describe('EmployeeTaskNewComponent', () => {
  let component: EmployeeTaskNewComponent;
  let fixture: ComponentFixture<EmployeeTaskNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeTaskNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTaskNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

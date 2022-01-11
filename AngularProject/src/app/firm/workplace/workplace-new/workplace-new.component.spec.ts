import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkplaceNewComponent } from './workplace-new.component';

describe('WorkplaceNewComponent', () => {
  let component: WorkplaceNewComponent;
  let fixture: ComponentFixture<WorkplaceNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkplaceNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkplaceNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

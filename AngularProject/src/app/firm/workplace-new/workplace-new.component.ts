import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { WorkplaceService } from 'src/app/services/workplace.service';
import { ValueArrayPipe } from 'src/app/pipes/value-array.pipe';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-workplace-new',
  templateUrl: './workplace-new.component.html',
  styleUrls: ['./workplace-new.component.css']
})
export class WorkplaceNewComponent implements OnInit {

  form = this.fb.group({
    name: new FormControl(''),
    position: new FormControl('')
  });

  positions: Observable<string[]> = this.workplaceService.getPositions();
  


  constructor(
    private workplaceService: WorkplaceService,
    private fb: FormBuilder) { }

  ngOnInit() {
  
  }

  addNew() {
    const workplaceFromForm = this.form.value;
    this.workplaceService.addNew(workplaceFromForm);  
  }
/*
  getPositions() {
    .subscribe(response => {
      this.positions = response;
    });
  }*/
}
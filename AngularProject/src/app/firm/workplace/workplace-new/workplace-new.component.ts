import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { WorkplaceService } from 'src/app/services/workplace.service';
import { ValueArrayPipe } from 'src/app/pipes/value-array.pipe';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/interfaces/store'
import * as fromActions from '../../../store/firm/firm.actions'

@Component({
  selector: 'app-workplace-new',
  templateUrl: './workplace-new.component.html',
  styleUrls: ['./workplace-new.component.scss']
})
export class WorkplaceNewComponent implements OnInit {

  form = this.fb.group({
    name: new FormControl('', [Validators.required]),
    position: new FormControl('', [Validators.required])
  });

  positions: Observable<string[]> = this.workplaceService.getPositions();
  


  constructor(
    private workplaceService: WorkplaceService,
    private store$: Store<AppState>,
    private fb: FormBuilder) { }

  ngOnInit() {
  
  }


  addNew() {
    const workplaceFromForm = this.form.value;
    this.store$.dispatch(fromActions.addWorkplace({workplace: workplaceFromForm}));
    //this.workplaceService.addNew(workplaceFromForm);  
  }
/*
  getPositions() {
    .subscribe(response => {
      this.positions = response;
    });
  }*/
}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/interfaces/store'
import * as fromActions from '../../store/options/options.actions'

@Component({
  selector: 'app-shift-new',
  templateUrl: './shift-new.component.html',
  styleUrls: ['./shift-new.component.scss']
})
export class ShiftNewComponent implements OnInit {

  form = this.fb.group({
    startTime: new FormControl('', [Validators.required]),
    finishTime: new FormControl('', [Validators.required])
  });



  constructor(
    private store$: Store<AppState>,
    private fb: FormBuilder) { }

  ngOnInit() {
  }


  addShift() {
    const shiftFromForm = this.form.value;
    this.store$.dispatch(fromActions.addShift({shift: shiftFromForm}));
  }
}
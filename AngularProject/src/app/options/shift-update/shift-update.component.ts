import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store,select } from '@ngrx/store';
import { AppState } from 'src/app/interfaces/store'
import * as fromSelectors from '../../store/options/options.selectors';

import * as fromActions from '../../store/options/options.actions'
import { ActivatedRoute } from '@angular/router';
import { Shift } from 'src/app/interfaces/shift';


@Component({
  selector: 'app-shift-update',
  templateUrl: './shift-update.component.html',
  styleUrls: ['./shift-update.component.scss']
})
export class ShiftUpdateComponent implements OnInit {

  form = this.fb.group({
    startTime: new FormControl('', [Validators.required]),
    finishTime: new FormControl('', [Validators.required])
  });
  shift$: Observable<Shift> = this.store$.pipe(select(fromSelectors.selectShift));
  

  constructor(
    private router:ActivatedRoute,
    private store$: Store<AppState>,
    private fb: FormBuilder) { }


  ngOnInit(): void {
     this.router.params.subscribe(res => 
      this.store$.dispatch(fromActions.getShift({uuid: res.uuid as string})));
  }

  updateShift() {
    const shiftFromForm = this.form.value;
    this.router.params.subscribe(res =>     
      this.store$.dispatch(fromActions.updateShift({shift: shiftFromForm,uuid: res.uuid as string})));
  }
}

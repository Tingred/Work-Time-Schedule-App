import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/interfaces/store';
import { Workplace } from 'src/app/interfaces/workplace';
import * as fromSelectors from '../../../store/firm/firm.selectors';
import * as fromActions from '../../../store/firm/firm.actions';

@Component({
  selector: 'app-workplace-main',
  templateUrl: './workplace-main.component.html',
  styleUrls: ['./workplace-main.component.scss']
})
export class WorkplaceMainComponent implements OnInit {

  workplaces$: Observable<Workplace[]> =  this.store$.pipe(select(fromSelectors.selectWorkplaces));

  constructor(
    private store$: Store<AppState>
    ) { }
  
  

  ngOnInit() {
    this.store$.dispatch(fromActions.getAllWorkplaces());
  }
  
  delete(uuid: string | undefined){
    this.store$.dispatch(fromActions.deleteWorkplace({uuid: uuid as string}));
  }
  

/*
  get allWorkplaces() {
    return this.workplaceService.getAll();.subscribe(response => {
      console.log(response);
      this.workplaces = response;
    });
  }*/
}
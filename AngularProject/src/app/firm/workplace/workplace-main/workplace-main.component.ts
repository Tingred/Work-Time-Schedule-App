import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/interfaces/store';
import { Workplace } from 'src/app/interfaces/workplace';

import * as fromSelectors from '../../store/firm/firm.selectors';

@Component({
  selector: 'app-workplace-main',
  templateUrl: './workplace-main.component.html',
  styleUrls: ['./workplace-main.component.css']
})
export class WorkplaceMainComponent implements OnInit {

  workplaces$: Observable<Workplace[]> =  this.store$.pipe(select(fromSelectors.selectWorkplaces));

  constructor(
    private store$: Store<AppState>
    ) { }
  
  

  ngOnInit() {
  
  }
  delete(uuid: string | undefined){
    // this.workplaceService.deleteWorkplace(uuid);
  }
  

/*
  get allWorkplaces() {
    return this.workplaceService.getAll();.subscribe(response => {
      console.log(response);
      this.workplaces = response;
    });
  }*/
}
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/interfaces/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import * as fromSelectors from '../../store/firm/firm.selectors';
import * as fromActions from '../../store/firm/firm.actions';
import { AppState } from 'src/app/interfaces/store';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-employee-main',
  templateUrl: './employee-main.component.html',
  styleUrls: ['./employee-main.component.css']
})
export class EmployeeMainComponent implements OnInit {

  
  employees$: Observable<Employee[]> =  this.store$.pipe(select(fromSelectors.selectEmployees));


  constructor(private store$: Store<AppState>
    ) { }

  ngOnInit(): void {
    this.store$.dispatch(fromActions.getAllEmployees());
  }

}

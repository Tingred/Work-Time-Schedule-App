import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Workplace } from 'src/app/interfaces/workplace';

import { WorkplaceService } from 'src/app/services/workplace.service';

@Component({
  selector: 'app-workplace-main',
  templateUrl: './workplace-main.component.html',
  styleUrls: ['./workplace-main.component.css']
})
export class WorkplaceMainComponent implements OnInit {

  workplaces: Observable<Workplace[]> =  this.workplaceService.getAll();

  constructor(private workplaceService:WorkplaceService) { }
  
  

  ngOnInit() {
  
  }
  delete(uuid: string | undefined){
    if(uuid)
    this.workplaceService.deleteWorkplace(uuid);
  }
  

/*
  get allWorkplaces() {
    return this.workplaceService.getAll();.subscribe(response => {
      console.log(response);
      this.workplaces = response;
    });
  }*/
}
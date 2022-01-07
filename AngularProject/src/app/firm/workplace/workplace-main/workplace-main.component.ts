import { Component, OnInit } from '@angular/core';

import { WorkplaceService } from 'src/app/services/workplace.service';

@Component({
  selector: 'app-workplace-main',
  templateUrl: './workplace-main.component.html',
  styleUrls: ['./workplace-main.component.css']
})
export class WorkplaceMainComponent implements OnInit {

  workplaces: any = [];
  workplace: any;

  constructor(private workplaceService:WorkplaceService) { }
  
  

  ngOnInit() {
    this.getAllWorkplaces();
  }
  


  getAllWorkplaces() {
    return this.workplaceService.getAll().subscribe(response => {
      this.workplaces = response;
    });
  }
}
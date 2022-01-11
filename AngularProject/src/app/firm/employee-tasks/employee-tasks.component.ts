import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-tasks',
  templateUrl: './employee-tasks.component.html',
  styleUrls: ['./employee-tasks.component.css']
})
export class EmployeeTasksComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }


  ngOnInit(): void {
    console.log(this.router.params.subscribe)
  }

}

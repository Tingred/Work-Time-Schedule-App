import { Component, OnInit } from '@angular/core';
import { Hall } from 'src/app/interfaces/hall';
import { HallService } from 'src/app/services/hall.service';


@Component({
  selector: 'app-hall-main',
  templateUrl: './hall-main.component.html',
  styleUrls: ['./hall-main.component.css']
})
export class HallMainComponent implements OnInit {

  halls!: Hall[];
  hall!: Hall;

  constructor(private hallService:HallService) { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(){
    this.getAllHalls();
  }

  getAllHalls(){
    this.hallService.getAll().subscribe(response => {
      this.halls = response;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



import { HallService } from 'src/app/services/hall.service';

@Component({
  selector: 'app-hall-new',
  templateUrl: './hall-new.component.html',
  styleUrls: ['./hall-new.component.css']
})
export class HallNewComponent implements OnInit {

  form = this.fb.group({
    name: new FormControl('')
  });


  constructor(
    private hallService: HallService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  

  addNew() {
    const hallFromForm = this.form.value;
    this.hallService.addNew(hallFromForm);  
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { PointServiceService } from "../point-service.service";

@Component({
  selector: 'app-points-form',
  templateUrl: './points-form.component.html',
  styleUrls: ['./points-form.component.css']
})
export class PointsFormComponent implements OnInit {
  @ViewChild('f') form: NgForm;

  constructor(private pointsService: PointServiceService ) { }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(+this.form.value.x,+this.form.value.y);
    this.pointsService.addPoint(+this.form.value.x,+this.form.value.y);
  }
}

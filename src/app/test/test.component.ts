import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// @ts-ignore
import Interactive from "https://vectorjs.org/interactive.js";
import { Vector } from "../common/Vector";
import { Line } from "../common/Line";
import { Observable, Subject } from "rxjs";
import { PointServiceService } from "../point-service.service";
import { DivideAndConquerService } from "../divide-and-conquer.service";


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  points: Vector[] = [];
  lines: Line[] = [];


  constructor(private pointService: PointServiceService, private divide: DivideAndConquerService) {
  }



  ngOnInit(): void {
    this.points = this.pointService.getPoints();
    this.pointService.getPointsUpdate().subscribe((points: Vector[])=>{
      this.points = points;
    })
    console.log(this.points);
    //this.lines.push(new Line(this.points[0], this.points[1]));
  }

  calculateHull() {
    //this.lines = this.divide.getConvexHull(this.points);
    console.log(this.lines);
  }
}

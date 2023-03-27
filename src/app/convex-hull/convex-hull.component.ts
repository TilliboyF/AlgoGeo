import { Component, OnInit, ViewChild } from '@angular/core';
import { Vector } from "../common/Vector";
import { Line } from "../common/Line";
import { NgForm } from "@angular/forms";
import { grahamScan, simpleAlgo } from "./KonvexHullAlgorithms";

@Component({
  selector: 'app-convex-hull',
  templateUrl: './convex-hull.component.html',
  styleUrls: ['./convex-hull.component.css']
})
export class ConvexHullComponent implements OnInit {

  points: Vector[] = [];
  lines: Line[] = [];
  @ViewChild('f') form: NgForm;

  constructor() { }

  ngOnInit(): void {
    this.points.push(new Vector(50, 50));
    this.points.push(new Vector(100, 100));
    this.points.push(new Vector(100, 50));
    this.points.push(new Vector(400, 200));
    for(let i = 0; i< 100; i++){
      const x = Math.floor(Math.random() * 750 + 25);
      const y = Math.floor(Math.random() * 350 + 25);
      this.addPoint(x,y);
    }
  }

  calculateHull() {
    const currTime = new Date().getTime();
    this.lines = grahamScan(this.points);
    console.log(new Date().getTime()-currTime);
  }
  private addPoint(x: number, y: number){
    const newPoint = new Vector(x,y);
    let found = false;
    for(let point of this.points){
      if(point.isEqual(newPoint)) {
        found = true;
        break;
      }
    }
    if(!found){
      this.points.push(new Vector(x,y));
    }
  }

  onSubmit() {
    this.addPoint(+this.form.value.x,+this.form.value.y);
  }

}

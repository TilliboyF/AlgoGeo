import { Component, OnInit, ViewChild } from '@angular/core';
import { Vector } from "../common/Vector";
import { Line } from "../common/Line";
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import {
  divideAndConquer,
  grahamScan,
  simpleAlgo
} from "./KonvexHullAlgorithms";

@Component({
  selector: 'app-convex-hull',
  templateUrl: './convex-hull.component.html',
  styleUrls: ['./convex-hull.component.css']
})
export class ConvexHullComponent implements OnInit {

  points: Vector[] = [];
  lines: Line[] = [];
  simpleAlgoTime: number = null;
  divideAndConquerTime: number = null;
  grahamScamTime: number = null;
  @ViewChild('f') form: NgForm;
  randomizeFrom: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.randomizeFrom = new FormGroup({
      'amount': new FormControl('100', [Validators.required])
    });
    this.randomizeFrom.get('amount').setValue(100, {onlySelf: true});
  }

  private addPoint(x: number, y: number) {
    const newPoint = new Vector(x, y);
    let found = false;
    for(let point of this.points) {
      if(point.isEqual(newPoint)) {
        found = true;
        break;
      }
    }
    if(!found) {
      this.points.push(new Vector(x, y));
    }
  }

  onSubmit() {
    this.addPoint(+this.form.value.x, +this.form.value.y);
  }

  simpleAlgo() {
    const currTime = new Date().getTime();
    this.lines = [];
    this.lines = simpleAlgo(this.points);
    this.simpleAlgoTime = new Date().getTime() - currTime;
  }

  divideAndConquer() {
    const currTime = new Date().getTime();
    this.lines = [];
    this.lines = divideAndConquer(this.points);
    this.divideAndConquerTime = new Date().getTime() - currTime;
  }

  grahamScam() {
    const currTime = new Date().getTime();
    this.lines = [];
    this.lines = grahamScan(this.points);
    this.grahamScamTime = new Date().getTime() - currTime;
  }

  randomizePoints() {
    console.log('test')
    console.log(this.randomizeFrom.get('amount').value);
    this.points = [];
    this.lines = [];
    this.setRandomPoints(this.randomizeFrom.get('amount').value);
  }

  private setRandomPoints(amount: number) {
    for(let i = 0; i < amount; i++) {
      const x = Math.floor(Math.random() * 750 + 25);
      const y = Math.floor(Math.random() * 350 + 25);
      this.addPoint(x, y);
    }
  }
}

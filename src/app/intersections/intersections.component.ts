import { Component, OnInit } from '@angular/core';
import { Vector } from "../common/Vector";
import { Line } from "../common/Line";
import { calculateIntersections } from "./IntersectionsAlgorithms";
import { grahamScan } from "../convex-hull/KonvexHullAlgorithms";

@Component({
  selector: 'app-intersections',
  templateUrl: './intersections.component.html',
  styleUrls: ['./intersections.component.css']
})
export class IntersectionsComponent implements OnInit {

  points: Vector[] = [];
  lines: Line[] = [];

  constructor() { }

  ngOnInit(): void {
    //this.lines.push(new Line(new Vector(100,100), new Vector(200,200)));
    //this.lines.push(new Line(new Vector(100,200), new Vector(200,100)));

    for(let i = 0; i < 10; i++) {
      const x1: number = Math.floor(Math.random() * 580 + 10);
      const y1: number = Math.floor(Math.random() * 580 + 10);
      const x2: number = Math.floor(Math.random() * 580 + 10);
      const y2: number = Math.floor(Math.random() * 580 + 10);
      this.lines.push(new Line(new Vector(x1, y1), new Vector(x2, y2)));
    }
  }

  calculateIntersections() {
    const currTime = new Date().getTime();
    this.points = calculateIntersections(this.lines);
    console.log(new Date().getTime() - currTime);
  }
}

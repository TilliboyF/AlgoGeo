import { Injectable, OnInit } from '@angular/core';
import { Vector } from "./common/Vector";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PointServiceService implements OnInit {

  points: Vector[] = [new Vector(50, 50), new Vector(100, 100), new Vector(100, 50), new Vector(400, 200)];
  pointsUpdate = new Subject<Vector[]>();

  constructor() { }


  ngOnInit(): void {
  }

  getPointsUpdate(): Observable<Vector[]> {
    return this.pointsUpdate.asObservable();
  }

  getPoints() {
    return [...this.points];
  }

  addPoint(x: number, y: number){
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
      this.pointsUpdate.next([...this.points]);
    }

  }
}

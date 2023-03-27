import { Injectable, resolveForwardRef } from '@angular/core';
import { Vector } from "./common/Vector";
import { Line } from "./common/Line";

@Injectable({
  providedIn: 'root'
})
export class DivideAndConquerService {

  constructor() { }

  getConvexHull(points: Vector[]) {
    points.sort((a,b) =>  a.x - b.x);

    return this.divideAndConquer(0, points.length-1,points);
  }

  calculateDetermine(p:number[], q: number[], r: number[]):number{
    let part1 = p[0] * (q[1] * r[2] - q[2] * r[1]);
    let part2 = p[1] * (q[0] * r[2] - q[2] * r[0]);
    let part3 = p[2] * (q[0] * r[1] - q[1] * r[0]);
    return part1 - part2 + part3;
  }

  divideAndConquer(left: number, right: number, points: Vector[]): Vector[]{
    if((right-left) <= 3 ){
      return points.slice(left, right);
    }else {
      const middle = Math.abs((left + right)/2);
      let leftHull = this.divideAndConquer(left, middle, points);
      let rightHull = this.divideAndConquer(middle+1, right, points);

      // rechttester punkt von links und linkester Punkt von Rechts als Startpunkt nehmen








      return rightHull;
    }

  }

  private isLowerTangente(lPoint: Vector, rPoint: Vector, lM1point: Vector, rP1point: Vector): boolean{
    return false;
  }

}

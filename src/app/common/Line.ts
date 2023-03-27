import { Vector } from "./Vector";
import { Equals } from "./Equals";

export class Line implements Equals<Line> {

  p1: Vector;
  p2: Vector;

  constructor(p1: Vector, p2: Vector) {
    this.p1 = p1;
    this.p2 = p2;
  }

  isEqual(other: Line): boolean {
    return (this.p1.isEqual(other.p1) && this.p2.isEqual(other.p2))
      || (this.p1.isEqual(other.p2) && this.p2.isEqual(other.p1));
  }

}

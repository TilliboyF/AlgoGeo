import { Equals } from "./Equals";

export class Vector implements Equals<Vector>{
  x: number;
  y: number;
  color: string;

  constructor(x: number, y: number);
  constructor(x: number, y: number, color?: string) {
    this.x = x;
    this.y = y;
    if(color){
      this.color = color;
    }
  }
  isEqual(vector: Vector): boolean{
    return this.x == vector.x && this.y == vector.y;
  }

}

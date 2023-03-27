import { Vector } from "./Vector";

export function sub(v1: Vector, v2: Vector): Vector {
  const x: number = v1.x - v2.x;
  const y: number = v1.y - v2.y;
  return new Vector(x, y);
}

export function add(v1: Vector, v2: Vector): Vector {
  const x: number = v1.x + v2.x;
  const y: number = v1.y + v2.y;
  return new Vector(x, y);
}

export function crossProduct(v1: Vector, v2: Vector): number {
  return v1.x * v2.y - (v1.y * v2.x);
}

export function scalarMult(a: number, v: Vector): Vector {
  return new Vector(v.x * a, v.y * a);
}


import { Vector } from "../common/Vector";
import { Line } from "../common/Line";

export function simpleAlgo(points: Vector[]): Line[] {
  const output: Line[] = [];
  const alreadyInList: Set<string> = new Set();
  for(let p of points) {
    for(let q of points) {
      if(p.isEqual(q)) continue;
      if(alreadyInList.has(`${ p.x }-${ p.y }-${ q.x }-${ q.y }`) ||
        alreadyInList.has(`${ q.x }-${ q.y }-${ p.x }-${ p.y }`)) continue;
      let isHullLine = true;
      for(let r of points) {
        if(p.isEqual(r) || q.isEqual(r)) continue;
        const or: Orientation = checkOrientation(p, q, r);
        if(or == Orientation.RIGHT) {
          isHullLine = false;
          break;
        }
      }
      if(isHullLine) {
        output.push(new Line(p, q));
        alreadyInList.add(`${ p.x }-${ p.y }-${ q.x }-${ q.y }`)
      }
    }
  }
  console.log(alreadyInList);
  return output;
}

export function divideAndConquer(points: Vector[]) {

}

export function grahamScan(points: Vector[]): Line[] {
  points.sort((a, b) => a.x - b.x);

  let L: Vector[] = [points[0], points[1]];
  for(let i = 2; i < points.length; i++) {
    while(L.length >= 2 && (checkOrientation(L[L.length - 2], L[L.length - 1], points[i]) == Orientation.RIGHT
      || checkOrientation(L[L.length - 2], L[L.length - 1], points[i]) == Orientation.NULL)) {
      L.pop();
    }
    L.push(points[i]);
  }
  const hull: Line[] = [];
  for(let i = 0; i < L.length - 1; i++) {
    hull.push(new Line(L[i], L[i + 1]));
  }

  points.forEach(point => new Vector(point.x, -point.y));

  L = [points[0], points[1]];
  for(let i = 2; i < points.length; i++) {
    while(L.length >= 2 && (checkOrientation(L[L.length - 2], L[L.length - 1], points[i]) == Orientation.LEFT
      || checkOrientation(L[L.length - 2], L[L.length - 1], points[i]) == Orientation.NULL)) {
      L.pop();
    }
    L.push(points[i]);
  }

  L.forEach(point => new Vector(point.x, -point.y));
  for(let i = 0; i < L.length - 1; i++) {
    hull.push(new Line(L[i], L[i + 1]));
  }

  return hull;
}

function checkOrientation(p: Vector, q: Vector, r: Vector): Orientation {
  const dir = calculateDetermine([p.x, p.y, 1], [q.x, q.y, 1], [r.x, r.y, 1]);
  if(dir < 0) return Orientation.LEFT;
  if(dir == 0) return Orientation.NULL;
  else return Orientation.RIGHT;
}

function calculateDetermine(p: number[], q: number[], r: number[]): number {
  const part1 = p[0] * (q[1] * r[2] - q[2] * r[1]);
  const part2 = p[1] * (q[0] * r[2] - q[2] * r[0]);
  const part3 = p[2] * (q[0] * r[1] - q[1] * r[0]);
  return part1 - part2 + part3;
}

function divideAndConquerHelper(left: number, right: number, points): Vector[] {
  if(right - left < 3) {
    const output: Vector[] = [];
    while(left <= right) {
      output.push(points[left]);
      left++;
    }
    return output;
  } else {
    const middle: number = Math.floor((left + right) / 2);
    const leftHull: Vector[] = divideAndConquerHelper(left, middle, points);
    const rightHull: Vector[] = divideAndConquerHelper(middle + 1, right, points);

    const leftMax = findMax(leftHull);
    const rightMax = findMax(rightHull);


  }
}

function findMax(points: Vector[]) {
  let max: number = 0;
  let index: number = 0;
  for(let i = 0; i < points.length; i++) {
    if(points[i].x >= max) {
      max = points[i].x;
      index = i;
    }
  }
  return index;
}

function mergeHulls(leftHull: Vector[], rightHull: Vector[]): Vector[] {
  const leftHullRight: number = 0;
  const rightHullLeft: number = 0;
  for(let i = 0; i < leftHull.length; i++) {

  }


  return [];
}

enum Orientation {
  LEFT = -1, RIGHT = 1, NULL = 0
}

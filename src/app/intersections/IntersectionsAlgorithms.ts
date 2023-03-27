import { Line } from "../common/Line";
import { Vector } from "../common/Vector";
import { sub, crossProduct, scalarMult, add } from "../common/VectorOperations"
import { PointServiceService } from "../point-service.service";

export function calculateIntersections(segments: Line[]): Vector[] {
  const intersections: Vector[] = [];
  for(let i=0; i<segments.length;i++) {
    for(let j=i+1;j<segments.length; j++) {
      const point: Vector = intersectionOf2Lines(segments[i], segments[j]);
      if(null != point) {
        intersections.push(point);
      }
    }
  }
  return intersections;
}

/**
 * https://stackoverflow.com/questions/563198/how-do-you-detect-where-two-line-segments-intersect
 * @param l1 line 1
 * @param l2 line 2
 * @return Vector intersection Point or null
 */
function intersectionOf2Lines(l1: Line, l2: Line): Vector {
  const p: Vector = l1.p1;
  const q: Vector = l2.p1;
  const r: Vector = sub(l1.p2, l1.p1);
  const s: Vector = sub(l2.p2, l2.p1);

  const rXs: number = crossProduct(r, s);
  const qMINUSpXr: number = crossProduct(sub(q, p), r);

  if(rXs == 0 && qMINUSpXr == 0) {
    return null;
  } else if(rXs == 0 && qMINUSpXr != 0) {
    return null;
  } else if(rXs != 0) {
    const u: number = ((q.y - p.y) - (r.y / r.x) * (q.x - p.x)) / (s.y - (r.y / r.x) * s.x);
    const t: number = (q.x - p.x - u * s.x)/r.x;
    if(0 <= -u && -u <= 1 && 0 <= t && t <= 1) {
      const intersectionPoint: Vector = add(q, scalarMult(-u, s));
      return intersectionPoint;
    }
    return null;

  } else {
    return null;
  }

}


import React from "react";
import intersection from "../../tdd/intersection.js";
import containment from "../../tdd/containment.js";
import adjacency from "../../tdd/adjacency.js";

export default function Analyze(props) {
  let i = intersection(props.rect1, props.rect2);
  let c = containment(props.rect1, props.rect2);
  let a = adjacency(props.rect1, props.rect2);
  return (
    <div id="analyze">
      <h2>Results</h2>
      {i ? (
        <h3>
          The rectangles intersect at{" "}
          {i.map((e, idx) => {
            if (idx === i.length - 1 && i.length !== 1) {
              return `and (${e[0]},${e[1]})`;
            } else {
              return `(${e[0]},${e[1]}), `;
            }
          })}
        </h3>
      ) : (
        <h3>There are no intersections</h3>
      )}
      {c ? (
        <h3>
          The {c[0]} rectangle is entirely contained within the {c[1]} rectangle
        </h3>
      ) : (
        <h3>There is no containment</h3>
      )}
      {a ? <h3>{a}</h3> : <h3>There is no adjacency</h3>}
    </div>
  );
}

import React from "react";
import intersection from "../../tdd/intersection.js";
import containment from "../../tdd/containment.js";

export default function Analyze(props) {
  let i = intersection(props.rect1, props.rect2);
  let c = containment(props.rect1, props.rect2);
  return (
    <div id="analyze">
      <h2>Results</h2>
      {i ? (
        <h3>
          The rectangles intersect at ({i[0][0]},{i[0][1]}) and ({i[1][0]},
          {i[1][1]})
        </h3>
      ) : (
        <h3>There are no intersections</h3>
      )}
      {c ? (
        <h3>
          The {c[0]} rectangle is entirely contained within <br />
          the {c[1]} rectangle
        </h3>
      ) : (
        <h3>There is no containment</h3>
      )}
    </div>
  );
}

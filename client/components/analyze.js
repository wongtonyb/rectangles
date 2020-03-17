import React from "react";
import intersection from "../../tdd/intersection.js";

export default function Analyze(props) {
  console.log(props);
  console.log(intersection);
  console.log(intersection(props.rect1, props.rect2));
  let i = intersection(props.rect1, props.rect2);
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
    </div>
  );
}

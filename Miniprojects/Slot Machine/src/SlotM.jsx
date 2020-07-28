import React from "react";
import "./App.css";

const SlotM = ({ x, y, z }) => {
  //let x = "😄";
  //let y = "😄";
  //let z = "🎅";

  if (x === y && y === z) {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x} {y} {z}
          </h1>
          <h1> this is matching.</h1>
          <hr />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x} {y} {z}
          </h1>
          <h1> this is not matching.</h1>
          <hr />
        </div>
      </>
    );
  }
};
export default SlotM;

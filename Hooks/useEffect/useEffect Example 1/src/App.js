import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);

  useEffect(() => {
    alert("I am Clicked");
    console.log("clicked");
  }, [num]);
  return (
    <>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
        className="btn btn-info"
      >
        click Me {num}
      </button>
      <hr />
      <button
        onClick={() => {
          setNums(nums + 1);
        }}
        className="btn btn-info"
      >
        click Me {nums}
      </button>
    </>
  );
};

export default App;

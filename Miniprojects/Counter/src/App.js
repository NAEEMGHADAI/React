import React, { useState } from "react";
import "./App5.css";

const App = () => {
  const [num, changeNum] = useState(0);
  const increNum = () => {
    changeNum(num + 1);
  };
  const decreaseNum = () => {
    const decre = num - 1;
    if (decre < 0) {
      alert("zero limit is reached");
    } else {
      changeNum(decre);
    }
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>{num}</h1>
          <br />

          <button onClick={increNum}> + </button>
          <button onClick={decreaseNum}> - </button>
        </div>
      </div>
    </>
  );
};

export default App;

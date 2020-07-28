import React, { useState } from "react";
import "./App2.css";

const App = () => {
  //const state = useState();
  //console.log(state);

  //const name = ["na", "ee", "m"];
  //const [a, b, c] = name;
  //console.log(a);
  //console.log(b);

  const [count, setCount] = useState(1);

  const IncNum = () => {
    setCount(count + 1);
    //console.log("clicked" + count++);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={IncNum}>Click Me</button>
    </>
  );
};

export default App;

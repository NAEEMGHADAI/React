import React, { useState } from "react";
import "./App2.css";

const App = () => {
  let newTime = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(newTime);

  const UpdateTime = () => {
    newTime = new Date().toLocaleTimeString();
    setCtime(newTime);
  };
  return (
    <>
      <h1>{ctime}</h1>
      <button onClick={UpdateTime}>Get Time</button>
    </>
  );
};

export default App;

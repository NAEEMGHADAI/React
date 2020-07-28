import React, { useState } from "react";
import "./App2.css";

const App = () => {
  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };

  setInterval(UpdateTime, 100);
  return (
    <>
      <h1>{ctime}</h1>
    </>
  );
};

export default App;

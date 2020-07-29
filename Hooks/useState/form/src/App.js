import React, { useState } from "react";
import "./App2.css";

const App = () => {
  const [name, setName] = useState("");
  const [fullname, setFullName] = useState("");
  const inputEvent = (event) => {
    setName(event.target.value);
  };
  const onSubmit = () => {
    setFullName(name);
  };
  return (
    <>
      <div>
        <h1>Hello {fullname}</h1>
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={inputEvent}
          value={name}
        />
        <button onClick={onSubmit}>Click Me 👍</button>
      </div>
    </>
  );
};

export default App;

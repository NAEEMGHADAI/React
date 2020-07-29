import React, { useState } from "react";
import "./App2.css";

const App = () => {
  const [name, setName] = useState("");
  const [fullname, setFullName] = useState("");
  const [lastname, setLastName] = useState("");
  const [lastnamenew, setlastNameNew] = useState("");
  const inputEvent = (event) => {
    setName(event.target.value);
  };
  const onSubmits = (event) => {
    event.preventDefault();
    setFullName(name);
    setlastNameNew(lastname);
  };
  const inputEventTwo = (event) => {
    setLastName(event.target.value);
  };
  return (
    <>
      <div>
        <h1>
          Hello {fullname} {lastnamenew}
        </h1>
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={inputEvent}
          value={name}
        />
        <br />
        <input
          type="text"
          placeholder="Enter Your Last Name"
          onChange={inputEventTwo}
          value={lastname}
        />
        <button onClick={onSubmits}>Click Me 👍</button>
      </div>
    </>
  );
};

export default App;

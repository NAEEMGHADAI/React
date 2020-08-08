import React from "react";
import ComponentC from "./ComponentC";
import { useContext } from "react";
import { FirstName, LastName } from "./App";

const ComponentB = () => {
  const fname = useContext(FirstName);
  const lname = useContext(LastName);
  return (
    <h1>
      My name is {fname} {lname}
    </h1>
  );
};
export default ComponentB;

import React, { createContext } from "react";
import ComponentA from "./ComponentA";

const FirstName = createContext();
const LastName = createContext();

const App = () => {
  return (
    <>
      <FirstName.Provider value={"Naeem"}>
        <LastName.Provider value={"Ghadai"}>
          <ComponentA />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
};

export default App;
export { FirstName, LastName };

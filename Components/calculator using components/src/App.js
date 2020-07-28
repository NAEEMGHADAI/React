import React from "react";
import { Add, sub, mul, div } from "./Calc";
function App() {
  return (
    <>
      <>
        <ul>
          <li>{sub(40, 4)}</li>
          <li>{mul(40, 4)}</li>
          <li>{div(4, 6)}</li>
          <li>{Add(40, 4)}</li>
        </ul>
      </>
    </>
  );
}
export default App;

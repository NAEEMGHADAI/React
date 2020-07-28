import React from "react";
import Greetings from "./Greetings";
import "./index.css";

function App() {
  let curDate = new Date(2020, 6, 22, 13);
  curDate = curDate.getHours();
  let greeting = "";
  const cssSyle = {
    color: "green",
  };

  if (curDate >= 1 && curDate < 12) {
    greeting = "Good Morning";
    cssSyle.color = "green";
  } else if (curDate > 12 && curDate < 19) {
    greeting = "Good Afternoon";
    cssSyle.color = "orange";
  } else {
    greeting = "Good Night";
    cssSyle.color = "black";
  }

  return (
    <>
      <Greetings cssSyle={cssSyle} greeting={greeting} />
    </>
  );
}

export default App;

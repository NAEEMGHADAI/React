import React from "react";

function Greetings({ cssSyle, greeting }) {
  return (
    <div>
      <h1>
        Hello sir, <span style={cssSyle}>{greeting}</span>
      </h1>
    </div>
  );
}
export default Greetings;

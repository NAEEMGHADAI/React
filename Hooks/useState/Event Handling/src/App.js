import React, { useState } from "react";
import "./App3.css";

const App = () => {
  const pur = "purple";
  const [bg, setBg] = useState(pur);
  const [content, chanContent] = useState("Click Me");
  const bgChanges = () => {
    const y = "yellow";
    setBg(y);
    chanContent("Ooouch😠");
  };

  const bgBack = () => {
    setBg(pur);
    chanContent("Ayyo!!!😠");
  };

  return (
    <>
      <div style={{ backgroundColor: bg }}>
        <button onClick={bgChanges} onDoubleClick={bgBack}>
          {content}
        </button>
      </div>
    </>
  );
};

export default App;

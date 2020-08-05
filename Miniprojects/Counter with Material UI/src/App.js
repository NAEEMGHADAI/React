import React, { useState } from "react";
import "./App6.css";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveRoundedIcon from "@material-ui/icons/RemoveRounded";
import Tooltip from "@material-ui/core/Tooltip";

const App = () => {
  const [num, changeNum] = useState(0);
  const increNum = () => {
    changeNum(num + 1);
  };
  const decreaseNum = () => {
    const decre = num - 1;
    if (decre < 0) {
      alert("zero limit is reached");
    } else {
      changeNum(decre);
    }
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>{num}</h1>
          <br />
          <div className="btn_div">
            <Tooltip title="Add">
              <Button onClick={increNum} className="btn_green">
                <AddIcon />
              </Button>
            </Tooltip>
            <Tooltip title="Subtract">
              <Button onClick={decreaseNum} className="btn_red">
                <RemoveRoundedIcon />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

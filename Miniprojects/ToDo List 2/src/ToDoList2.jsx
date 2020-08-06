import React from "react";
import "./App7.css";
import DeleteOutlineTwoToneIcon from "@material-ui/icons/DeleteOutlineTwoTone";
import { useState } from "react";

const ToDoLists = ({ text, id }) => {
  const [line, setLine] = useState(false);
  const cutIt = () => {
    setLine(true);
  };
  return (
    <>
      <div className="todo_style">
        <span onClick={cutIt}>
          <DeleteOutlineTwoToneIcon className="deleteIcon" />
        </span>
        <li style={{ textDecoration: line ? "line-through" : "none" }}>
          {text}
        </li>
      </div>
    </>
  );
};

export default ToDoLists;

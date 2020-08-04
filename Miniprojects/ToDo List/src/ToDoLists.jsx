import React from "react";

const ToDoLists = ({ text, id, onSelect }) => {
  return (
    <>
      <div className="todo_style">
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={() => {
            onSelect(id);
          }}
        ></i>
        <li>{text}</li>
      </div>
    </>
  );
};

export default ToDoLists;

import React, { useState } from "react";
import "./App7.css";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import TodoList2 from "./ToDoList2";

const App = () => {
  const [item, setItem] = useState("");
  const [newitem, setNewItem] = useState([]);

  const itemEvent = (event) => {
    setItem(event.target.value);
  };

  const itemList = () => {
    setNewItem((prev) => {
      return [...prev, item];
    });
    setItem("");
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add an Item"
            onChange={itemEvent}
            value={item}
          />
          <Button className="newBtn" onClick={itemList}>
            <AddIcon />
          </Button>

          <br />
          <ol>
            {newitem.map((val, index) => {
              return <TodoList2 text={val} id={index} key={index} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;

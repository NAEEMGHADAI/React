import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [num, setNum] = useState(1);
  const [name, setName] = useState();
  const [moves, setMove] = useState();

  useEffect(() => {
    //alert("hii");

    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      console.log(res.data);
      setName(res.data.name);
      setMove(res.data.moves[0].move.name);
    }

    getData();
  });
  return (
    <>
      <h1>
        My no. is <span style={{ color: "red" }}>{num}</span>
      </h1>
      <h1>
        My Name is <span style={{ color: "red" }}>{name}</span>
      </h1>
      <h1>
        My Famous move is <span style={{ color: "red" }}>{moves}</span> moves
      </h1>
      <select
        value={num}
        onChange={(event) => {
          setNum(event.target.value);
        }}
      >
        <option value="1"> 1</option>
        <option value="25">25</option>
        <option value="3"> 3</option>
        <option value="4"> 4</option>
        <option value="5"> 5</option>
      </select>
    </>
  );
};

export default App;

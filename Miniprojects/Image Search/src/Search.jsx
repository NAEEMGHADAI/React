import React from "react";
import "./Search.css";
import { useState } from "react";
import Sresult from "./Sresult";

const Search = () => {
  const [img, setImg] = useState("");
  const inputEvent = (event) => {
    const data = event.target.value;
    setImg(data);
  };
  return (
    <>
      <div className="searchbar">
        <h1>Search</h1>
        <input
          type="text"
          placeholder="Search Anything"
          onChange={inputEvent}
          value={img}
        />

        {img === "" ? null : <Sresult image={img} />}
      </div>
    </>
  );
};

export default Search;

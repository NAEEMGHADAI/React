import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

//Spread Operator
//Case 1
const FullName = ["Naeem", "Ghadai"];
const biodata = ["1", ...FullName, 26];

console.log(biodata);

//Case 2
const shooterGames = ["Call of Duty", "Far Cry", "PUBG"];
const racingGames = ["Need for Speed", "Gran Turismo", "Burn Out"];

var games = [...shooterGames, ...racingGames];
console.log(games);

//Case 3
const [first, ...remaining] = shooterGames;
console.log(first);
console.log(remaining);

//Case 4
const Fullname = {
  fname: "naeem",
  lname: "ghadai",
};

const bioData = {
  id: 1,
  ...Fullname,
  age: 20,
};

console.log(bioData);

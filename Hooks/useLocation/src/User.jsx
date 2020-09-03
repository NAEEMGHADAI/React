import React from "react";
import { useParams, useLocation } from "react-router-dom";

/*const User = ({ match }) => {
  return (
    <>
      <h1>User {match.params.name} Page</h1>
    </>
  );
};*/

const User = () => {
  const { fname, lname } = useParams();
  const location = useLocation();
  console.log(location);
  return (
    <>
      <h1>
        User {fname} {lname} Page
      </h1>
      {location.pathname === `/user/naeem/ghadai` ? (
        <button onClick={() => alert("You are Awesome")}> click me</button>
      ) : null}
    </>
  );
};

export default User;

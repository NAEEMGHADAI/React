import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";

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
  const history = useHistory();
  console.log(history);
  return (
    <>
      <h1>
        User {fname} {lname} Page
      </h1>
      {location.pathname === `/user/naeem/ghadai` ? (
        <button onClick={() => history.goBack()}> goBack </button>
      ) : null}
      <br />
      {location.pathname === `/user/naeem/ghadai` ? (
        <button onClick={() => history.push("/")}> HomePage </button>
      ) : null}
    </>
  );
};

export default User;

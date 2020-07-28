import React from "react";
import Top from "./Top";
import Rest from "./Rest";

const rank = 4;
/*const Rankcity = () => {
  if (rank <= 3) {
    return <Top />;
  } else {
    return <Rest />;
  }
};*/

function App() {
  return (
    <>
      <h1 className="heading-style">List of top 5 Cities in India</h1>
      {/*<Rankcity />*/}
      {rank <= 3 ? <Top /> : <Rest />}
    </>
  );
}
export default App;

import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";
import img4 from "./img/4.jpg";

const Rest = () => {
  return (
    <Card
      imgsrc={img4}
      title={Sdata[4].cname}
      discription={Sdata[4].discription}
    />
  );
};
export default Rest;

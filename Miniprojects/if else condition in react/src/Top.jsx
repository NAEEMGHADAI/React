import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";
import img3 from "./img/3.jpg";

const Top = () => {
  return (
    <Card
      imgsrc={img3}
      title={Sdata[0].cname}
      discription={Sdata[0].discription}
    />
  );
};
export default Top;

import React from "react";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import img5 from "./img/5.jpg";
import Card from "./Card";
import Sdata from "./Sdata";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="heading-style">List of top 5 Cities in India</h1>
      <Card
        imgsrc={img3}
        title={Sdata[0].cname}
        discription={Sdata[0].discription}
      />
      <Card
        imgsrc={img2}
        discription={Sdata[1].discription}
        title={Sdata[1].cname}
      />
      <Card
        imgsrc={img1}
        title={Sdata[2].cname}
        discription={Sdata[2].discription}
      />
      <Card
        imgsrc={img4}
        title={Sdata[3].cname}
        discription={Sdata[3].discription}
      />
      <Card
        imgsrc={img5}
        title={Sdata[4].cname}
        discription={Sdata[4].discription}
      />
    </>
  );
}
export default App;

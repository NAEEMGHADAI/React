import React from "react";
import "./App.css";
function Card({ imgsrc, title, discription }) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={imgsrc} alt="myPic" className="card__img" />
          <div className="card__info">
            <span className="card__category"> {discription} </span>
            <h3 className="card__title"> {title} </h3>
            <a href="/" target="_blank">
              <button> Watch Now </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;

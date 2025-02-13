import React, { useState } from "react";
import "./Fireworks.css";
// import Scorpion from "./scorpion.jpg";

const ValentineDay = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <span style={{ fontFamily: "cursive", fontSize: "25px" }}>
        Dear Pumto,
      </span>{" "}
      <br />
      <span style={{ fontSize: "8px" }} className="disabled">
        Tap envelope to open
      </span>
      <div
        className="container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div class="envelope"></div>
        <div class={`card ${isHovered ? "slide" : ""}`}>
          <h1 class="message">Love yah lil' beasty</h1>
          {/* <img src={Scorpion} className="img-fluid" alt="scorpy" /> */}
          <div class="heart"></div>
        </div>
        <div class="cover"></div>
        <div class={`lid ${isHovered ? "open" : ""}`}></div>

        <div class="shadow"></div>
      </div>
    </>
  );
};

export default ValentineDay;

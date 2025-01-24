import React from "react";
import picture from "./giraffe.jpg";
import "./Fireworks.css";

const Card = ({ image, content, rotation }) => {
  const rotationStyle = {
    transform: `rotate(${rotation}deg)`,
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="card one p-2" style={rotationStyle}>
        <div className="card-img-top">
          <img src={image} alt="image" className="img-fluid" />
        </div>
        <div className="card-body">{content}</div>
      </div>
    </div>
  );
};

const Wallpaper = () => {
  return (
    <div className="container py-5">
      <div className="d-flex justify-content-center">
        <Card image={picture} content="Hello" rotation={20} />
      </div>

      <div className="d-flex justify-content-center">
        <Card image={picture} content="Hello" rotation={-20} />
      </div>

      <div className="d-flex justify-content-center">
        <Card image={picture} content="Hello" rotation={20} />
      </div>
    </div>
  );
};

export default Wallpaper;

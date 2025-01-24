import React, { useState } from "react";
import profile from "./giraffe.jpg";
import "./Fireworks.css";

const Birthday = () => {
  const [showFireworks, setShowFireworks] = useState(false);

  const createParticles = (x, y) => {
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.setProperty("--x", `${Math.random() * 200 - 100}px`);
      particle.style.setProperty("--y", `${Math.random() * 200 - 100}px`);
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      document.body.appendChild(particle);
      setTimeout(() => particle.remove(), 1500);
    }
  };

  const handleYesClick = (e) => {
    const { clientX, clientY } = e;
    createParticles(clientX, clientY);
    alert("Thank you very much");
  };

  const handleNoClick = () => {
    alert("Thanks");
  };

  return (
    <div className="container d-flex justify-content-around py-5">
      <div className="card" style={{ width: "75%" }}>
        <img className="card-img-top img-fluid" src={profile} alt="profile" />
        <div className="card-body">
          <h4 className="card-title">Happy Birthday To Me</h4>
          <p className="card-text">Care to join?.</p>
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary" onClick={handleYesClick}>
              YES
            </button>
            <button className="btn btn-primary" onClick={handleNoClick}>
              NO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Birthday;


.fireworks-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 1000;
}
.particle {
  position: absolute;
  width: 6px;
  height: 6px;
  background: red;
  border-radius: 50%;
  animation: move 1.5s ease-out forwards;
}

@keyframes move {
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(var(--x), var(--y)) scale(0.5);
    opacity: 0;
  }
}

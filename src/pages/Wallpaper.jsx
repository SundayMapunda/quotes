import React, { useRef, useState } from "react";
import picture from "./Asha1.jpg";
import birthday from "./Asha2.jpg";
import picha from "./Asha3.jpg";
import "./Fireworks.css";
import song from "./LordHuron.mp3";
import nyimbo from "./TeriMeri.mp3";
import music from "./AlanWalker.mp3";

const Card = ({ image, content, rotation }) => {
  const rotationStyle = {
    transform: `rotate(${rotation}deg)`,
  };
  return (
    <div className="card one p-2" style={rotationStyle}>
      <div className="card-img-top">
        <img src={image} alt="image" className="img-fluid" />
      </div>
      <div className="card-body">{content}</div>
    </div>
  );
};

const Wallpaper = () => {
  // Create refs for the audio elements
  const audioRef1 = useRef(null);
  const audioRef2 = useRef(null);
  const audioRef3 = useRef(null);

  // State to track if each song is playing
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);
  const [isPlaying3, setIsPlaying3] = useState(false);

  // Function to handle play/pause for song 1
  const handlePlayPause1 = () => {
    if (isPlaying1) {
      audioRef1.current.pause();
      audioRef1.current.currentTime = 0;
    } else {
      audioRef1.current.play();
    }
    setIsPlaying1(!isPlaying1);
  };

  // Function to handle play/pause for song 2
  const handlePlayPause2 = () => {
    if (isPlaying2) {
      audioRef2.current.pause();
      audioRef2.current.currentTime = 0;
    } else {
      audioRef2.current.play();
    }
    setIsPlaying2(!isPlaying2);
  };

  // Function to handle play/pause for song 3
  const handlePlayPause3 = () => {
    if (isPlaying3) {
      audioRef3.current.pause();
      audioRef3.current.currentTime = 0;
    } else {
      audioRef3.current.play();
    }
    setIsPlaying3(!isPlaying3);
  };

  return (
    <div className="container py-5">
      <p className="display-2 text-center mb-5">HAPPY BIRTHDAY 🥳🎂🥂</p>

      {/* Cards */}
      <div className="d-flex justify-content-center">
        <Card
          image={birthday}
          content="Mzumbe University Alumna"
          rotation={20}
        />
      </div>

      <div className="d-flex justify-content-center">
        <Card image={picha} content="Cool & Cute Chucky" rotation={-20} />
      </div>

      <div className="d-flex justify-content-center">
        <Card image={picture} content="Birthday Girl" rotation={20} />
      </div>

      {/* Three buttons to play the songs */}
      <div className="text-center mt-5">
        <h2>Chagua Wimbo</h2>

        <button className="btn btn-primary" onClick={handlePlayPause1}>
          {isPlaying1 ? "Stop" : "Play"}
        </button>
        <br />
        <button className="btn btn-primary mt-3" onClick={handlePlayPause2}>
          {isPlaying2 ? "Stop" : "Play"}
        </button>
        <br />
        <button className="btn btn-primary mt-3" onClick={handlePlayPause3}>
          {isPlaying3 ? "Stop" : "Play"}
        </button>
      </div>

      {/* Audio elements with refs */}
      <audio ref={audioRef1}>
        <source src={song} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <audio ref={audioRef2}>
        <source src={nyimbo} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <audio ref={audioRef3}>
        <source src={music} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Wallpaper;

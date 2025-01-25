import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Birthday = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [messages, setMessages] = useState([]);
  const [surpriseVisible, setSurpriseVisible] = useState(false);

  const birthdayDate = new Date("2025-01-26"); // Set her birthday date here

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeDiff = birthdayDate - now;

      if (timeDiff <= 0) {
        clearInterval(interval);
        setSurpriseVisible(true);
      } else {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });

        // Show messages based on the days left
        const newMessages = [];
        if (days === 3) newMessages.push("3 days left: You're amazing!");
        if (days === 2)
          newMessages.push("2 days left: Can't wait to celebrate!");
        if (days === 1)
          newMessages.push("1 day left: Are you ready? I'm doing rehersal 😊.");

        setMessages(newMessages);
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div
      className="text-center p-5"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      <h1>ASHA OMARY</h1>
      <h1>
        <i>Countdown to Your Special Day!</i>
      </h1>

      <div
        id="countdown"
        className="shadow-lg py-2 rounded border border-light my-4"
        style={{
          fontSize: "40px",
          color: "#ff8c00",
          backdropFilter: "blur(10px)",
        }}
      >
        {timeLeft.days !== undefined ? (
          <p>
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
            {timeLeft.seconds}s
          </p>
        ) : (
          <p>Hooraayyy!!!</p>
        )}
      </div>

      <div className="messages fs-3" style={{ color: "#333" }}>
        {messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>

      {surpriseVisible && (
        <div id="surprise" className="mt-3 fs-3" style={{ color: "#00bfae" }}>
          <p>
            Happy Birthday! 🎉 Here's a special video for you:{" "}
            {/* <a href="your-video-link" target="_blank" rel="noopener noreferrer">
              Watch it now!
            </a> */}
            <Link to="/quotes/board">Supriseee</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default Birthday;

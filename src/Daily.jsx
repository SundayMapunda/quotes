import React, { useState, useEffect, useRef } from "react";
import { toPng } from 'html-to-image';
import download from 'downloadjs';

const quotes = [
  "I'm not clumsy, I'm just on a personal mission to test gravity!",
  "Every level conquered is just a stepping stone to the next epic adventure.",
  "I'm on a seafood diet. I see food, and eat it - especially if it's chocolate.",
  "I told my computer I needed a break, and now it won't stop sending me beach wallpapers.",
  "Strength is not the absence of fear, but the courage to dance with it.",
  "Every setback is a setup for stronger comeback, let your spirit rise!",
  "The best players don't just master the game, they write their own rules.",
  "The true treasure of gaming is the friends we make along the way",
];

const authors = ["Arthur Alfred", "Anonymous", "Rachel Lorenzo"];

function Daily() {
  const [currentQuote, setCurrentQuote] = useState("");
  const [currentAuthor, setCurrentAuthor] = useState("");
  const modalRef = useRef(null);

  useEffect(() => {
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const authorIndex = Math.floor(Math.random() * authors.length);
    setCurrentQuote(quotes[quoteIndex]);
    setCurrentAuthor(authors[authorIndex]);
  }, []);

  const handleDownload = () => {
    if (!modalRef.current) return;

    toPng(modalRef.current)
      .then((dataUrl) => {
        download(dataUrl, 'quote.png');
      })
      .catch((err) => {
        console.error('Failed to capture quote:', err);
      });
  };

  return (
    <div>
      <div
        className="card border-0 shadow px-3 py-2 mt-3 mb-4"
        style={{ backgroundColor: "cyan" }}
      >
        <a
          href="#myModal"
          data-bs-toggle="modal"
          className="stretched-link"
        ></a>
        <p
          className="fs-2"
          style={{ fontFamily: "monospace", fontWeight: "bold" }}
        >
          {`"${currentQuote}"`} <br /> - {currentAuthor}
        </p>
         <small>Come back tomorrow for another quote</small>
      </div>

      <div className="modal fade" id="myModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body" ref={modalRef}>
              <p className="fs-2" style={{ fontFamily: 'monospace', fontWeight: 'bold' }}>
                {`"${currentQuote}"`} <br /> - {currentAuthor}
              </p>
            </div>

            <div className="modal-footer">
             {/* <button
                type="button"
                className="btn btn-warning"
                onClick={handleDownload}
              >
                Download
              </button> */}
              
              <button
                type="button"
                className="btn btn-warning"
              >
                Download
              </button>
              
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Daily;

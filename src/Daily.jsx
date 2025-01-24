import React, { useState, useEffect } from "react";
import { Dropdown, Modal } from "bootstrap";

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
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  }, []);

  const [currentAuthor, setCurrentAuthor] = useState("");
  useEffect(() => {
    const authorIndex = Math.floor(Math.random() * authors.length);
    setCurrentAuthor(authors[authorIndex]);
  }, []);

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
      </div>

      {/* <div className="modal" id="myModal">
        <div className="modal-dialog">
            <div className="modal-content">

            <div className="modal-header">
                <h4 className="modal-title">Save Quote</h4>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body">
                <p className='fs-2' style={{fontFamily: 'monospace', fontWeight: 'bold'}}>
                    {`"${currentQuote}"`} <br /> - {currentAuthor}
                </p>
            </div>

            <div className="modal-footer">
                <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Download</button>
            </div>

            </div>
        </div>
        </div> */}
    </div>
  );
}

export default Daily;

import React from "react";
import { Link } from "react-router-dom";
import giraffe from "./giraffe.jpg";

const ErrorPage = () => {
  return (
    <>
      <div className="container py-3">
        <span>
          <small>Giraffe</small>
        </span>
        <div className="picture text-center">
          <img src={giraffe} alt="picture" className="img-fluid" />
          <div className="title my-3 display-5">
            I'm not the only traveler, <br />
            who has not repaid his debt.
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;

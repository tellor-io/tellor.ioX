import React from "react";
import { Link } from "react-router-dom";

const Hello = () => (
  <div className="viewContainer NotFound">
    <h1>Oops! Nothing to see here...</h1>
    <Link to="/">Let's go back home</Link>
  </div>
);

export default Hello;

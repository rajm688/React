import * as React from 'react';
import { useState } from "react";
import { Counter } from "./Counter";

export function Welcome({ name, img, details, rating }) {
  //conditional styling
  const styles = { color: rating > 8 ? "green" : "red" };
  const [show, setshow] = useState(true);
  // const displays = {display: show ? "block" : "none"};
  return (
    <div className="main">
      <img className="image" src={img} alt="img" />
      <div className="sub">
        <h1>{name}</h1>
        <p style={styles}>⭐{rating}</p>
      </div>
      <div className="buttons">
        <button className="btn" onClick={() => setshow(!show)}><span>⏬</span>Show Details</button>
        <Counter />
      </div>
      {/* conditional styling */}
      {/* <p style={displays} className="content">{details}</p> */}
      {/* Conditional rendering */}
      {show ? <p className="content">{details}</p> : ""}


    </div>
  );
}

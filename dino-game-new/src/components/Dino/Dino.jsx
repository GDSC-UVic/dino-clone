// import useState hook and useRef hook
import React, { useRef, useState } from "react";
// DO: import css file
import "./Dino.css";

function Dino() {
  // DO: ref to get 'dino' html element in js
  // Code goes here
  const dinoRef = useRef();
  // DO: ref to get 'cactus' html element in js
  // Code goes here
  const cactusRef = useRef();
  // DO: create state for score
  // DO: set initial score to 0
  // Hint! use useState hook
  // Code goes here
  const [score, setScore] = useState(0);

  return (
    <div className="game">
      {/* DO: using the h2 tag create a score board */}
      {/* Hint! Make use of the usestate you created */}
      <h2>Score: {score}</h2>

      {/* DO: create the dino */}
      {/* Hint! Make use of the useRef */}
      <div id="dino" ref={dinoRef}></div>

      {/* DO: create the cactus */}
      {/* Hint! Make use of the useRef */}
      <div id="cactus" ref={cactusRef}></div>
    </div>
  );
}

export default Dino;
// DO: Import useEffect hook
import React, { useEffect, useRef, useState } from "react";
import "./Dino.css";

function Dino() {
  
  const dinoRef = useRef();
  const cactusRef = useRef();
  const [score, setScore] = useState(0);

  // IDEA: track the dino and cactus position and check if they are intersecting. If yes, then game over.
  // DO: Create a useEffect hook to create an interval to continuously check for collision.
  // DO: Inside the useEffect hook create a setInterval to continuously check for collision.
  // DO: Inside the setInterval function, get the current dino and cactus position.
  // DO: Inside the setInterval function, check if they are intersecting. If yes, then game over.
  // DO: Clear the interval when the component unmounts.
  // Code goes here ...

  return (
    <div className="game">

      <h2>Score: {score}</h2>

      <div id="dino" ref={dinoRef}></div>
      <div id="cactus" ref={cactusRef}></div>
    </div>
  );
}

export default Dino;
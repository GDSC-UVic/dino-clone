import React, { useEffect, useRef, useState } from "react";
import "./Dino.css";

function Dino() {
  
  const dinoRef = useRef();
  const cactusRef = useRef();
  const [score, setScore] = useState(0);

  useEffect(() => {
    const isAlive = setInterval(function () {
      
      const dinoTop = parseInt(
        getComputedStyle(dinoRef.current).getPropertyValue("top")
      );

      let cactusLeft = parseInt(
        getComputedStyle(cactusRef.current).getPropertyValue("left")
      );

      if (cactusLeft < 40 && cactusLeft > 0 && dinoTop >= 140) {
        alert( "Game Over! Your Score : " + score);
        setScore(0);

      } else {
        setScore(score + 1);
      }
    }, 10);

    return () => clearInterval(isAlive);
  });

  return (
    <div className="game">

      <h2>Score: {score}</h2>

      <div id="dino" ref={dinoRef}></div>
      <div id="cactus" ref={cactusRef}></div>
    </div>
  );
}

export default Dino;
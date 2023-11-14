// DO: Import useEffect hook
import React, { useEffect, useRef, useState } from "react";
import "./Dino.css";

function Dino() {
  
  const dinoRef = useRef();
  const cactusRef = useRef();
  const [score, setScore] = useState(0);

  useEffect(() => {
    
    const isAlive = setInterval(function () {
      // DO: Inside the setInterval function, get the current dino and cactus position.
      // Hint! get current dino Y position
      // Hint! parseInt() function converts a string to an integer.
      // Hint! getComputedStyle() function returns the values of all the CSS properties of an element.
      // Code goes here ...
      

      // DO: Do the same exact thing for the cactus position.
      // Hint! get current cactus X position
      // Code goes here ...
      

      // DO: Check for collision.
      // DO: Check if the cactus is less than 40px from the left and greater than 0px.
      // DO: Check if the dino is less than 140px from the top.
      // Hint! use if statement
      // DO: If the above conditions are true, then alert "Game Over! Your Score : " + score by using alert() function.
      // DO: If the above conditions are false, then increment the score by 1.
      // Hint! use setScore() function
      // Code goes here ...


    }, 10);
    
    // DO: Change the code below to return the clearInterval function.
    // This is to clear the interval when the component is unmounted.
    // Code goes here ...
    return () => {};
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
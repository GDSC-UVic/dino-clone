import React, { useEffect, useRef, useState } from 'react';
import './Dino.css';

function Dino() {
  const dinoRef = useRef();
  const cactusRef = useRef();
  const [score, setScore] = useState(0);

  // This is the jump function and it is also to prevent the dino from jumping multiple times
  const jump = () => {

    // Condition to check if the dino element has the jump class
    if (!!dinoRef.current && !dinoRef.current.classList.contains('jump')) {
      // Adds a jump class to the dino element
      dinoRef.current.classList.add('jump');
      
      // DO: Remove the jump class after 300ms to end the jump animation
      // Code goes here ...
    }
  };

  // DO: Create a function handleJumpButtonClick which calls the jump function
  // Code goes here ...

  useEffect(() => {
    const isAlive = setInterval(function () {
      const dinoTop = parseInt(
        getComputedStyle(dinoRef.current).getPropertyValue('top')
      );
      let cactusLeft = parseInt(
        getComputedStyle(cactusRef.current).getPropertyValue('left')
      );

      if (cactusLeft < 40 && cactusLeft > 0 && dinoTop >= 140) {
        alert('Game Over! Your Score : ' + score);
        setScore(0);
      } else {
        setScore(score + 1);
      }
    }, 10);

    return () => clearInterval(isAlive);
  });

  return (
    <div className="game">
      Score : {score}
      <div id="dino" ref={dinoRef}></div>
      <div id="cactus" ref={cactusRef}></div>
      {/* DO: Create a jump button which triggers the jump function*/}
      {/* Code goes here ... */}
    </div>
  );
}

export default Dino;

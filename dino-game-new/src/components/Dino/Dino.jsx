import React, { useEffect, useRef, useState } from 'react';
import './Dino.css';

function Dino() {
  const [startScreen, setStartScreen] = useState(true);

  const dinoRef = useRef();
  const cactusRef = useRef();
  const [score, setScore] = useState(0);

  const handleClick = () => {
    setStartScreen(false);
  };

  const jump = () => {

    if (!!dinoRef.current && !dinoRef.current.classList.contains('jump')) {
  
      dinoRef.current.classList.add('jump');
      
      setTimeout(function () {
        dinoRef.current.classList.remove('jump');
      }, 300);
    }
  };

  // DO: Chnage the code below to call the jump function by any keypress instead of a button click
  // Hint! use useEffect and addEventListener
  const handleJumpButtonClick = () => {
    jump();
  };
 

  useEffect(() => {
    const isAlive = setInterval(function () {
      const dinoTop = parseInt(
        getComputedStyle(dinoRef.current).getPropertyValue('top')
      );
      let cactusLeft = parseInt(
        getComputedStyle(cactusRef.current).getPropertyValue('left')
      );

      if (cactusLeft < 40 && cactusLeft > 0 && dinoTop >= 140) {
        alert('Game Over! Your Score : ' + score)
        setStartScreen(true);
        setScore(0);
      } else {
        setScore(score + 1);
      }
    }, 10);

    return () => clearInterval(isAlive);
  });

  return (
    <>
    {startScreen ? (
      <div className="startScreen">
        <button onClick={handleClick}>Start Game</button>
      </div>
    ) :
    <div className="game">
      Score : {score}
      <div id="dino" ref={dinoRef}></div>
      <div id="cactus" ref={cactusRef}></div>
      {/* DO: Delete the jump button */}
      <button onClick={handleJumpButtonClick}>Jump</button>
    </div>
}
    </>
  );
}

export default Dino;

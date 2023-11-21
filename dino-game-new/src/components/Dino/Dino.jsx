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
      }, 600);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", jump);
    return () => document.removeEventListener("keydown", jump);
  }, []);
 

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
        setStartScreen(true);
        setScore(0);
      } else {
        setScore(score + 1);
      }
    }, 10);

    return () => clearInterval(isAlive);
  });

  return (
    <div>
      {startScreen ? (
      <div className="startScreen">
        <button onClick={handleClick}>Start Game</button>
      </div>
      ) :
      <div className="game">
      <h2>Score: {score}</h2>
      <div id="dino" ref={dinoRef}></div>
      <div id="cactus" ref={cactusRef}></div>
      </div>
      }
    </div>
    
  );
}

export default Dino;

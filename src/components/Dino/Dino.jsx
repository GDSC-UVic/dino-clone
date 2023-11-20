import React, { useEffect, useRef, useState } from 'react';
import backgroundMusic from './night-in-kyoto-avbe-main-version-21302-01-57.mp3';

import './Dino.css';

function Dino() {
  const dinoRef = useRef(null);
  const cactusRef = useRef(null);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false); // Track if the game is over
  const [countdown, setCountdown] = useState(3);
  const [showModal, setShowModal] = useState(false);
  const audio = new Audio(backgroundMusic);

  useEffect(() => {
    // Play music when the game starts
    if (gameStarted && !gameOver) {
      audio.play();
    } else {
      audio.pause();
    }

    // Cleanup function to pause music when component unmounts
    return () => audio.pause();
  }, [gameStarted, gameOver]);

  // Function to restart the game
  const restartGame = () => {
    // Remove the paused animation class from all animated elements
    document.querySelectorAll('.animated').forEach(el => {
      el.classList.remove('paused-animation');
    });

    setShowModal(false); // Hide the modal
    setScore(0); // Reset the score
    setGameOver(false); // Mark the game as not over
    setGameStarted(false); // We will restart the countdown
    setCountdown(3); // Reset the countdown
  };

  // Countdown effect
  useEffect(() => {
    let timerId;
    if (!gameStarted && countdown > 0) {
      timerId = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (countdown === 0 && !gameOver) {
      setGameStarted(true);
    }
    return () => clearTimeout(timerId);
  }, [countdown, gameStarted, gameOver]);

  // Jump event listener effect
  useEffect(() => {
    const jumpEventListener = (event) => {
      jump();
    };
    document.addEventListener("keydown", jumpEventListener);
    return () => document.removeEventListener("keydown", jumpEventListener);
  }, []);

  // Game loop effect
  useEffect(() => {
    let intervalId;
    if (gameStarted && !gameOver) {
      intervalId = setInterval(() => {
        const dinoTop = parseInt(window.getComputedStyle(dinoRef.current).getPropertyValue('top'));
        let cactusLeft = parseInt(window.getComputedStyle(cactusRef.current).getPropertyValue('left'));

        if (cactusLeft < 250 && cactusLeft > 200 && dinoTop >= 130) {
          setShowModal(true);
          setGameOver(true); // Stop the game loop
          // Add the paused animation class to all animated elements
          document.querySelectorAll('.animated').forEach(el => {
            el.classList.add('paused-animation');
          });
        } else {
          setScore(score + 1);
        }
      }, 10);
    }
    return () => clearInterval(intervalId);
  }, [gameStarted, gameOver, score]);


  

  // Jump function
  const jump = () => {
    if (dinoRef.current && !dinoRef.current.classList.contains('jump')) {
      dinoRef.current.classList.add('jump');
      setTimeout(() => {
        if (dinoRef.current) {
          dinoRef.current.classList.remove('jump');
        }
      }, 300);
    }
  };

  return (
    <div className="game">
      {!gameStarted && !gameOver ? (
        <div className="countdown">{countdown}</div>
      ) : (
        <>
          <h2>Score: {score}</h2>
          <div id="dino" ref={dinoRef} className="animated"></div>
          <div id="cactus" ref={cactusRef} className="animated"></div>
        </>
      )}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>Game Over! Your Score: {score}</p>
            <button onClick={restartGame}>Restart Game</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dino;

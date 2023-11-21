// Section 1: DO: import useState hook, useEffect hook, and useRef hook
// Code goes here
// Section 1: DO: import css file
// Code goes here

function Dino() {

  const [startScreen, setStartScreen] = useState(true);

  const handleClick = () => {
    setStartScreen(false);
  };

  // Section 1: DO: ref to get 'dino' html element in js
  // Hint! use useRef hook
  // Code goes here

  // Section 1: DO: ref to get 'cactus' html element in js
  // Hint! use useRef hook
  // Code goes here

  // Section 1: DO: create state for score
  // Section 1: DO: set initial score to 0
  // Hint! use useState hook
  // Code goes here

  // This is the jump function and it is also to prevent the dino from jumping multiple times
  const jump = () => {

    // Condition to check if the dino element has the jump class
    if (!!dinoRef.current && !dinoRef.current.classList.contains('jump')) {
      // Adds a jump class to the dino element
      dinoRef.current.classList.add('jump');
      
      // Section 3: DO: Remove the jump class after 600ms to end the jump animation
      // Hint! use setTimeout function
      // Code goes here ...
    }
  };

  // Section 4: DO: Chnage the code below to call the jump function by any keypress instead of a button click
  // Hint! use useEffect and addEventListener
  
  const handleJumpButtonClick = () => {
    jump();
  };

  useEffect(() => {
    document.addEventListener("keydown", jump);
    return () => document.removeEventListener("keydown", jump);
  }, []);
 

  useEffect(() => {
    
    const isAlive = setInterval(function () {
      // Section 2: DO: Inside the setInterval function, get the current dino and cactus position.
      // Hint! get current dino Y position
      // Hint! parseInt() function converts a string to an integer.
      // Hint! getComputedStyle() function returns the values of all the CSS properties of an element.
      // Code goes here ...
      

      // Section 2: DO: Do the same exact thing for the cactus position.
      // Hint! get current cactus X position
      // Code goes here ...
      

      // Section 2: DO: Check for collision.
      // Section 2: DO: Check if the cactus is less than 240px from the left and greater than 190px.
      // Section 2: DO: Check if the dino is less than 130px from the top.
      // Hint! use if statement
      // Section 2: DO: If the above conditions are true, then alert "Game Over! Your Score : " + score by using alert() function. Also reset the score to 0 and set the startScreen to true.
      // Section 2: DO: If the above conditions are false, then increment the score by 1.
      // Hint! use setScore() function
      // Code goes here ...


    }, 10);
    
    // This is to clear the interval when the component is unmounted.
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
      {/* Section 1: DO: using the h2 tag create a score board */}
      {/* Hint! Make use of the usestate you created */}
      {/* Code goes here */}

      {/* Section 1: DO: create the dino */}
      {/* Hint! Make use of the useRef */}
      {/* Code goes here */}

      {/* Section 1: DO: create the cactus */}
      {/* Hint! Make use of the useRef */}
      {/* Code goes here */}

      {/* Section 4: DO: Delete the jump button */}

      {/* Section 3: DO: Create a jump button which triggers the jump function*/}
      {/* Code goes here ... */}
      </div>
      }
    </div>
    
  );
}

export default Dino;

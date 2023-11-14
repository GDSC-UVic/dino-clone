// DO: import useState hook and useRef hook
// Code goes here
// DO: import css file
// Code goes here

function Dino() {
  // DO: ref to get 'dino' html element in js
  // Code goes here
 
  // DO: ref to get 'cactus' html element in js
  // Code goes here

  // DO: create state for score
  // DO: set initial score to 0
  // Hint! use useState hook
  // Code goes here


  return (
    <div className="game">
      {/* DO: using the h2 tag create a score board */}
      {/* Hint! Make use of the usestate you created */}
      {/* Code goes here */}

      {/* DO: create the dino */}
      {/* Hint! Make use of the useRef */}
      {/* Code goes here */}

      {/* DO: create the cactus */}
      {/* Hint! Make use of the useRef */}
      {/* Code goes here */}
    </div>
  );
}

export default Dino;
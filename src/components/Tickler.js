import React from "react";

function Tickler() {

  function tickle(event) {
    // console.log("Teehee!");
    console.log(event);
  }

  return <button onClick={tickle}>Tickle me!</button>;
  // return <button onClick={() => console.log("Teehee!")}>Tickle me!</button>;
  // ^ same thing as the line above, but without the need for the tickle() function
}

export default Tickler;

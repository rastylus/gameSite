import React from "react";

function Die({ num }) {
  let dice = [
    "diceSides/dice-six-faces-one.png",
    "diceSides/dice-six-faces-two.png",
    "diceSides/dice-six-faces-three.png",
    "diceSides/dice-six-faces-four.png",
    "diceSides/dice-six-faces-five.png",
    "diceSides/dice-six-faces-six.png",
  ];

  return (
    <div>
      <img style={{ height: "25vh" }} src={dice[num - 1]} />
    </div>
  );
}

export default Die;

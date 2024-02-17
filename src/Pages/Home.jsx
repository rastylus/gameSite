import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("purple");
  const [opacity, setOpacity] = useState(1);
  const [num, setNum] = useState(0);

  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    // return Math.random();
  };

  const handleClick = () => {
    setNum(randomNumberInRange(1, 6));
  };

  const changeColor = () => {
    setColor((prevColor) => (prevColor === "blue" ? "white" : "blue"));
  };

  const changeOpacity = (e) => {
    setOpacity(e.target.value);
  };

  const backgroundColors = count % 2 === 0 ? "#808000" : "lightskyblue";

  let dice = [
    "diceSides/dice-six-faces-one.png",
    "diceSides/dice-six-faces-two.png",
    "diceSides/dice-six-faces-three.png",
    "diceSides/dice-six-faces-four.png",
    "diceSides/dice-six-faces-five.png",
    "diceSides/dice-six-faces-six.png",
  ];

  return (
    <div
      style={{
        background: backgroundColors,
        opacity: opacity,
        color: color,
        padding: "4vh",
      }}
    >
      <div className="card">
        <h2>Number is: {num}</h2>
        <div>
          <img style={{ height: "25vh" }} src={dice[num - 1]} />
        </div>
        <div>
          <button onClick={handleClick}>Click Me Generate</button>
        </div>
        <div style={{ padding: "2vh" }}>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <p style={{ padding: "2vh" }}>
          <Link to="/test">test</Link>
        </p>
        <p style={{ padding: "2vh" }}>
          <Link to="/play">play</Link>
        </p>
        <button onClick={changeColor}>Change Color</button>
        <div style={{ padding: "2vh" }}>
          <label htmlFor="opacityRange">Change Opacity:</label>
          <input
            type="range"
            id="opacityRange"
            min="0.1"
            max="1"
            step="0.1"
            value={opacity}
            onChange={changeOpacity}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default Home;

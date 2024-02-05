import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("purple");
  const [opacity, setOpacity] = useState(1);
  const [num, setNum] = useState(0);

  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleClick = () => {
    setNum(randomNumberInRange(1, 20));
  };

  const changeColor = () => {
    setColor((prevColor) => (prevColor === "black" ? "white" : "black"));
  };

  const changeOpacity = (e) => {
    setOpacity(e.target.value);
  };

  const backgroundColors = count % 2 === 0 ? "red" : "blue";

  return (
    <div
      style={{
        background: backgroundColors,
        opacity: opacity,
        color: color,
        padding: "100px",
      }}
    >
      <div className="card">
        <h2>Number is: {num}</h2>
        <button onClick={handleClick}>Click Me Generate</button>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          <Link to="/test">test</Link>
        </p>
        <button onClick={changeColor}>Change Color</button>
        <div>
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

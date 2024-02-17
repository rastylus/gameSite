import React, { useState } from "react";
import { Link } from "react-router-dom";
import Die from "../components/Die";


function Home() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("purple");
  const [opacity, setOpacity] = useState(1);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    // return Math.random();
  };


  const handleClick = () => {
    setNum1(randomNumberInRange(1, 6));
    setNum2(randomNumberInRange(1, 6));
  };

  const changeColor = () => {
    setColor((prevColor) => (prevColor === "blue" ? "white" : "blue"));
  };

  const changeOpacity = (e) => {
    setOpacity(e.target.value);
  };

  const backgroundColors = count % 2 === 0 ? "#808000" : "lightskyblue";


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
        <h2>Number is: {num1}, {num2}</h2>
        <Die num={num1}/>
        <Die num={num2}/>
        <div>
          <button onClick={handleClick}>Click Me Generate</button>
        </div>
        <div style={{ padding: "2vh" }}>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <p style={{ padding: "2vh" }}>
          <Link to="/test" style={{ color: "black" }}>
            test
          </Link>
        </p>
        {/* <p style={{ padding: "2vh" }}>
          <Link to="/play">play</Link>
        </p> */}
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

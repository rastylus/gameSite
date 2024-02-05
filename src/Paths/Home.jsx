import { useState } from "react";
import { BrowserRouter, Routes, Route , Link} from "react-router-dom";


function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div></div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>HELLO</p>
        <p><Link to='/test'>test</Link></p>

        <input type="range"></input>
      </div>

    </>
  );
}

export default Home;

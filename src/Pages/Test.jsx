import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import { Tone } from "tone/build/esm/core/Tone";


function Test() {


  return (
    <>
      <p>test is here</p>
      <p><Link to='/'>home</Link></p>
    </>
  );
}

export default Test;

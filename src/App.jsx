import { useState } from "react";
import { BrowserRouter, Routes, Route , Link} from "react-router-dom";
import "./App.css";
import Test from "./Paths/Test";
import Home from "./Paths/Home";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route index element={<Home />} />
          <Route path="test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

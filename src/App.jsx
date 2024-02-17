import { useState } from "react";
import { BrowserRouter, Routes, Route , Link} from "react-router-dom";
import "./App.css";
import Test from "./Pages/Test";
import Home from "./Pages/Home";
import PlayPage from "./Pages/PlayPage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route index element={<Home />} />
          <Route path="test" element={<Test />} />
          <Route path="/play" element={<PlayPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App font-Ubuntu">
      {/* start routes  */}
      <Routes>
        <Route index path="/" element={<Home />}></Route>
      </Routes>
      {/* end routes  */}
    </div>
  );
}

export default App;

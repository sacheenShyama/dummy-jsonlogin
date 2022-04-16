import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";


import LoginHome from "./components/Login/LoginHome";
import Signin from "./components/Login/Signin";
import Signup from "./components/Login/Signup"
// import Register from "./components/Login/Register"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginHome/>}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      
      </Routes>
    </div>
  );
}

export default App;

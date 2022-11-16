import "./App.css";
import React from "react";
import Home from "./pages/Home";
import Navbar from "./Navbar";
import About from "./pages/About"

function App() {
  let Component
  switch(window.location.pathname){
    case "/":
      Component = <Home/>
      break;
    case "/about":
      Component =  <About/>
      break
  }

  return (
    <>
      <Navbar/>
      <div className="container">{Component}</div>
    </>
  );
}

export default App;

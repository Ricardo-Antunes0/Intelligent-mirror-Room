import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

  var mqtt = require('mqtt')

  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;

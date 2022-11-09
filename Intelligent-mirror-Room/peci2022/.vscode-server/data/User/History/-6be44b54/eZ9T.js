import "./App.css";
import Home from "./pages/Home";
function App() {

  var mqtt = require('mqtt');
  var options = {
    protocol : 'mqtts',
    clientid : 'reactapp'
  }
  var client = mqtt.connect('0.0.0.0', options)
  client.subscribe('counter')

  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;

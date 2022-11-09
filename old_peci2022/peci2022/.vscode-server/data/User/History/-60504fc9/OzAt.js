import React, {useEffect } from 'react';
import BannerImage from "../assets/room.jpeg";
import "../styles/Home.css";
import {Icon} from '@iconify/react';
import Grafico from "../graph";

function Home() {
  //atribuir valores random a "npessoas"
  const [npessoas, setNpessoas] = React.useState(0);
  const[positions, setPositions] = React.useState([]);
  const [ppg, setPpg] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      loadJson();
      var canvas = document.getElementById("drawPeople");
      canvas.width = 1200;
      canvas.height = 750;
      var ctx = canvas.getContext("2d");
      ctx.lineWidth = 6;
      ctx.strokeStyle = 'rgba(255,0,0,1)';
  
      for (let i = 0; i < npessoas; i++) {
        var pos = positions[i]
        var radious = (pos.w - pos.x)/2
        ctx.beginPath();
        ctx.arc((pos.x+radious)*1.9, (pos.y+radious)*2, radious, 0, 2*Math.PI, false);
        ctx.fillStyle = 'red';
        ctx.fill()
        ctx.stroke()
        
      }

    }, 1000)
    return () => clearInterval(interval)
  })

  const loadJson = async () => {
    const response = await fetch('http://192.168.160.19:5000/counter')
    const result = await response.json()
    if (result.num_people){
      setNpessoas(result.num_people)
    } else {
      setNpessoas(0)
    }
    
    setPpg(result.value)
    //car Json into array
    var array = [];
    Object.keys(result.positions).forEach(function (key) {
        array.push(result.positions[key]);

    });
    setPositions(array)
  }
  return (
    <div >
      <img className="room" alt="room" src={BannerImage} />
      <canvas id="drawPeople" className='peopleCanvas' ></canvas>

      <div className="rect">
        <h1 className="npd">{npessoas}</h1>
        <Icon className="iconpessoas" icon="fluent:people-24-filled"   />
      </div>
      <div className="rect2">
        <h1 className="pdr">Intelligent Waiting Room</h1>
      </div>
      <div className="rect3">
        <h1>Value : {ppg}</h1>
        <div className='grafico'><Grafico value={ppg}/></div>
      </div>
      <div className='info' >
        <Icon icon="entypo:info-with-circle" color="#699bf7" height="100" />
      </div>
    </div>  
  );
}

export default Home;


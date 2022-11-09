import React, { useState, useEffect } from 'react';
import BannerImage from "../assets/room.jpeg";
import "../styles/Home.css";
import {Icon} from '@iconify/react';

function Home() {
  //atribuir valores random a "npessoas"
  const [npessoas, setNpessoas] = React.useState(10);
  const[positions, setPositions] = React.useState([]);


  useEffect(() => {
    const interval = setInterval(() => {
      loadJson();
      var canvas = document.getElementById("drawPeople");
      canvas.width = 1200;
      canvas.height = 750;
      var ctx = canvas.getContext("2d");
      ctx.lineWidth = 10;
      ctx.strokeStyle = 'rgba(255,0,0,1)';
  
      for (let i = 0; i < npessoas; i++) {
        var pos = positions[i]
        ctx.beginPath();
        ctx.moveTo(pos.x*1.9, pos.y*1.8)
        ctx.lineTo(pos.x*1.9, pos.h*1.8)
        ctx.lineTo(pos.w*1.9, pos.h*1.8)
        ctx.lineTo(pos.w*1.9, pos.y*1.8)
        ctx.closePath()
        ctx.stroke()
        
      }

    }, 1000)
    return () => clearInterval(interval)
  })

  const loadJson = async () => {
    const response = await fetch('http://localhost:5000/counter')
    const result = await response.json()
    setNpessoas(result.num_people)
    //car Json into array
    var array = [];
    Object.keys(result.positions).forEach(function (key) {
        array.push(result.positions[key]);

    });
    setPositions(array)
  }

  

  //clearCanva(ctx, canvas)

  function clearCanva(ctx, canvas){
    ctx.clearRect(0,0,canvas.width, canvas.height)
  } 
 
  return (
    <div className="linha">
      
      <img className="room" src={BannerImage} />
      <canvas id="drawPeople" className='peopleCanvas' ></canvas>

      <div className="rect">
        <h1 className="npd">{npessoas}</h1>
        <Icon className="iconpessoas" icon="fluent:people-24-filled"   />
      </div>
      <div className="rect2">
        <h1 className="pdr">People counter</h1>
      </div>
      <div className="rect3">
        <h1 className='bpm-text'>Heart Rate</h1>
      </div>
      <div className='info' >
        <Icon icon="entypo:info-with-circle" color="#699bf7" height="100" />
      </div>
    </div>  
  );
}

export default Home;


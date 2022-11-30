import React, { useState, useEffect } from "react";
//import Zmage from "react-zmage";
import Fade from "react-reveal";
import BannerImage from "../assets/waiting_room.jpg"
import "../Home.css";
import {Icon} from '@iconify/react';
import Grafico from "../graph";

//let id = 0;
function Portfolio() {
    //atribuir valores random a "npessoas"
    const [npessoas, setNpessoas] = React.useState(0);
    const[positions, setPositions] = React.useState([]);
    const [ppg, setPpg] = React.useState(0);
   // const[move, setMove] = useState(false);
    const[show, setShow] = useState(true);
  
    setTimeout(() => {
      setShow(!show);
    }
    , 4000);
   
  
    useEffect(() => {
      const interval = setInterval(() => {
        loadJson();
        var canvas = document.getElementById("drawPeople");
        canvas.width = 1200;
        canvas.height = 750;
        var ctx = canvas.getContext("2d");
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'rgb(255,0,0,1)';
        ctx.fillStyle = "red";
        var radious = 10
        for (let i = 0; i < npessoas; i++) {
          var pos = positions[i]
          
          ctx.beginPath();
          ctx.arc((pos.x+radious+30)*3.9, (pos.y+55+radious)*4, radious*3.7, 0, 2*Math.PI, false);
          ctx.stroke()
          ctx.fill()
          
        }
  
      }, 1000)
      return () => clearInterval(interval)
    })
  //http://192.168.160.19:5000/counter
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
    return(
      <section id="portfolio">
      <Fade left duration={1000} distance="80px">
        <div className='home'>
          <div className='room-div'>
            <img className="room" alt="room" src={BannerImage} />
            <canvas id="drawPeople" className='peopleCanvas' ></canvas>
            </div>
          <div className="rect">
                  <div className="npd">{npessoas}</div>
                  <Icon className="iconpessoas" icon="fluent:people-24-filled"   />
                </div>
                {parseInt(ppg)===0 && (
                <div className="rect3">
                  <div className='withoutheart'>
                    <h2>Move closer to the camera</h2>
                    <Icon className='heart' icon="uil:heart-rate" color="red" width="100" />
                  </div>
                </div>
                )}
                {parseInt(ppg)>0 && (
                <div className="rect3">
                  <div className='textppg'>
                    <h1>{ppg}</h1>
                    <Icon className="heart" icon="bi:heart-pulse-fill" width="30" color="#FF0000"/>
                  </div>
                  <div className='grafico'><Grafico value={ppg}/></div>
                </div>
                )}
          </div> 
      </Fade>
    </section>
  );
      
  }

export default Portfolio;




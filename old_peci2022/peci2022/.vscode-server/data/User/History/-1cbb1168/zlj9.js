import React, { useState, useEffect } from 'react';
import BannerImage from "../assets/waiting_room.jpg";
import "../styles/Home.css";
import {Icon} from '@iconify/react';
import Grafico from "../graph";
import { AnimatePresence} from "framer-motion";
import visgas from '../fotos/visgas.jpg';
import amarelo from '../fotos/amarelo.jpg';
import brune from '../fotos/brune.jpg';
import pedra from '../fotos/pedra.jpg';
import jana from '../fotos/jana.jpg';

function Home() {
  //atribuir valores random a "npessoas"
  const [npessoas, setNpessoas] = React.useState(0);
  const[positions, setPositions] = React.useState([]);
  const [ppg, setPpg] = React.useState(0);
  const[move, setMove] = useState(false);
  const[show, setShow] = useState(true);

  setTimeout(() => {
    setShow(!show);
  }
  , 4000);
 

  useEffect(() => {
    const interval = setInterval(() => {
      loadJson();
      var canvas = document.getElementById("drawPeople");
      canvas.width = 900;
      canvas.height = 750;
      var ctx = canvas.getContext("2d");
      ctx.lineWidth = 5;
      ctx.strokeStyle = 'rgb(255,0,0,1)';
      ctx.fillStyle = "red";
      var radious = 10
      for (let i = 0; i < npessoas; i++) {
        var pos = positions[i]
        
        ctx.beginPath();
        ctx.arc((pos.x+radious)*3.9, (pos.y+radious)*4, radious*3.7, 0, 2*Math.PI, false);
        ctx.stroke()
        ctx.fill()
        
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
    <div className='home'>
      <div className='room-div'>
        <img className="room" alt="room" src={BannerImage} />
        <canvas id="drawPeople" className='peopleCanvas' ></canvas>
      </div>
      <div className="rect">
        <h1 className="npd">{npessoas}</h1>
        <Icon className="iconpessoas" icon="fluent:people-24-filled"   />
      </div>
      <div className="title-div">
        <h1 className="pdr">Intelligent Waiting Room</h1>
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
      <AnimatePresence >
        {move && (
        <div className="aboutus"  >
          <h1 className='titulo'> About us</h1>
              <img className='visgas_foto' src={visgas} alt="visgas"/>
              <h2 className='joaoviegas'>João Viegas</h2>
              <img className='Amarelo_foto' src={amarelo} alt="amarelo"/>
              <h2 className='joaoamaral'>João Amaral</h2>
              <img className='brune_foto' src={brune} alt="brune"/>
              <h2 className='brunolemos'>Bruno Lemos</h2>
              <img className='pedra_foto' src={pedra} alt="pedra"/>
              <h2 className='pedrorocha'>Pedro Rocha</h2>
              <img className='jana_foto' src={jana} alt="joana"/>
              <h2 className='joanacunha'>Joana Cunha</h2>
              <h2 className='peci'>Projeto de Engenhenharia de computadores e informatica</h2>
        </div>)}
      </AnimatePresence>
      <div className='info' onMouseEnter={()=>setMove(!move)} onMouseLeave={()=>setMove(!move)}>
        <Icon icon="entypo:info-with-circle" color="#699bf7" height="100" />
      </div>
    </div>  
  );
}

export default Home;


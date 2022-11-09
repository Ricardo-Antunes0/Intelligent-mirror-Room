import React, { useState, useEffect } from 'react';
import BannerImage from "../assets/room.jpeg";
import "../styles/Home.css";
import {Icon} from '@iconify/react';
import Grafico from "../graph";
import { motion, AnimatePresence} from 'framer-motion';
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

  useEffect(() => {
    const interval = setInterval(() => {
      loadJson();
      var canvas = document.getElementById("drawPeople");
      canvas.width = 1200;
      canvas.height = 750;
      var ctx = canvas.getContext("2d");
      ctx.lineWidth = 5;
      ctx.strokeStyle = 'rgba(255,0,0,1)';
  
      for (let i = 0; i < npessoas; i++) {
        var pos = positions[i]
        var radious = (pos.w - pos.x)/2
        ctx.beginPath();
        ctx.arc((pos.x+radious)*3.9, (pos.y+radious)*4, radious*3.7, 0, 2*Math.PI, false);
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
      <div className="rect3">
        <div className='textppg'>
          <h1>{ppg}</h1>
          <Icon className="heart" icon="bi:heart-pulse-fill" width="30" color="#FF0000"/>
        </div>
        <div className='grafico'><Grafico value={ppg}/></div>
      </div>
      <AnimatePresence >
        {move && (
        <div className="aboutus"  >
          <h1 className='titulo'> About us</h1>
              <img className='visgas_foto' src={visgas}/>
              <h2 className='joaoviegas'>João Viegas</h2>
              <img className='Amarelo_foto' src={amarelo}/>
              <h2 className='joaoamaral'>João Amaral</h2>
              <img className='brune_foto' src={brune}/>
              <h2 className='brunolemos'>Bruno Lemos</h2>
              <img className='pedra_foto' src={pedra}/>
              <h2 className='pedrorocha'>Pedro Rocha</h2>
              <img className='jana_foto' src={jana}/>
              <h2 className='joanacunha'>Joana Cunha</h2>
              <h2 className='peci'>Projeto de Engenhenharia de computadores e informatica</h2>
        </div>)}
      </AnimatePresence>
      <div className='info' >
        <Icon icon="entypo:info-with-circle" color="#699bf7" height="100" />
      </div>
    </div>  
  );
}

export default Home;


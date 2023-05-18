import React, { useState, useEffect } from "react";
//import Zmage from "react-zmage";
import Fade from "react-reveal";
import BannerImage from "../assets/apagar.jpg"
import "../Home.css";
import {Icon} from '@iconify/react';
import Grafico from "../graph";

//let id = 0;
function ppg() {
    const [ppg, setPpg] = React.useState(0);
    const[show, setShow] = useState(true);
    setTimeout(() => {
      setShow(!show);
    }
    , 4000);
 
  //http://192.168.160.19:5000/counter
    const loadJson = async () => {
      const response = await fetch('http://localhost:3000/')
      const result = await response.json()
      
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
    </section>
  );
      
  }

export default ppg;




import React, { useState, useEffect } from 'react';
import BannerImage from "../assets/room.jpeg";
import "../styles/Home.css";
import {Icon} from '@iconify/react';

function Home() {
  //atribuir valores random a "npessoas"
  const [npessoas, setNpessoas] = React.useState(0);
  
  useEffect(() => {
    setInterval(() => {
      setNpessoas(Math.floor(Math.random() * (40)));
    }, 1000);
  }, []);



  return (
    <div className="linha">
      <img className="room" src={BannerImage} />
      
      <div className="rect2">
        <h1 className="pdr">People counter</h1>
      </div>
      <div className="rect3">
      </div>
      <div className='info' >
        <Icon icon="entypo:info-with-circle" color="#699bf7" height="100" />
      </div>
    </div>

    
  
  );
}

export default Home;


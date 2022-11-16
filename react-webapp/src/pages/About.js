import React from "react";
import "../styles/About.css"
import visgas from '../fotos/visgas.jpg';
import amarelo from '../fotos/amarelo.jpg';
import brune from '../fotos/brune.png';
import pedra from '../fotos/pedra.jpg';
import jana from '../fotos/jana.jpg';
import { AnimatePresence} from "framer-motion";

export default function About(){
    return (
        <>
        <div className="about">
            <p>Introooooo</p>
        </div>
        <AnimatePresence >
          (
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
        <div className='info' >
        </div>
        </>
    )
}
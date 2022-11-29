import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import {Link, NavLink} from 'react-router-dom'



class Home extends Component {

  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


    
    render() {
        if (!this.props.data) return null;

        //const name = this.props.data.name;
        const freixo = "images/" + this.props.data.freixo;
        const rafael = "images/" + this.props.data.rafael;
        const diogo = "images/" + this.props.data.freixo;
        const renato = "images/" + this.props.data.freixo;
        const ricardo = "images/" + this.props.data.ricardo;
        const bio = this.props.data.bio;
        const street = this.props.data.address.street;
        const city = this.props.data.address.city;
        const state = this.props.data.address.state;
        const zip = this.props.data.address.zip;
        const phone = this.props.data.phone;
        const email = this.props.data.email;
        const resumeDownload = this.props.data.resumedownload;
        
        const github = this.props.data.github;
        const name = this.props.data.name
        const description = this.props.data.description


        

        


    
        return (
          <div>
          <header id="home">
            <ParticlesBg type="circle" bg={true} />
    
            <div className="row banner">
              <div className="banner-text">
                <Fade bottom>
                  <h1 className="responsive-headline">{name}</h1>
                </Fade>
                <Fade bottom duration={1200}>
                  <h3>{description}.</h3>
                </Fade>
                <hr />
                <Fade bottom duration={2000}>
                  <ul className="social">
                    <a href={github} className="button btn github-btn">
                      <i className="fa fa-github"></i>Github
                    </a>
                  </ul>
                </Fade>
              </div>
            </div>
    
            <p className="scrolldown">
              <a className="smoothscroll" href="#about">
                <i className="icon-down-circle"></i>
              </a>
            </p>
          </header>
          
          <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="nine columns main-col">
              <h1>About Us</h1>
              <p>{bio}</p>
            </div>
          </div>
          <div className="row">
          <div className="column">
              <img
                className="profile-pic"
                src={freixo}
                alt="freixo"
              />
              <h3>Diogo Fontes</h3>
              <p>Descricao fontes</p>
            </div>
            <div className="column">
              <img
                className="profile-pic"
                src={freixo}
                alt="freixo"
              />
              <h3>Filipe Freixo</h3>
              <p>Descricao freixo</p>  
            </div>
            <div className="column">
              <img
                className="profile-pic"
                src={rafael}
                alt="freixo"
              />
              <h3>Rafael Pereira</h3>
              <p>Descricao rafa</p>
            </div>
            <div className="column">
              <img
                className="profile-pic"
                src={freixo}
                alt="freixo"
              />
              <h3>Renato Ourives</h3>
              <p>Descricao renato</p>
            </div>
            <div className="column">
              <img
                className="profile-pic"
                src={ricardo}
                alt="freixo"
              />
              <h3>Ricardo Antunes</h3>
              <p>Descricao antunes</p>
            </div>
            
          </div>
        </Fade>
      </section>


          
          
          
          
          
          </div>
        );
    }
}


export default Home
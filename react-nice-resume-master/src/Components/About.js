import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const freixo = "images/" + this.props.data.freixo;
    const rafael = "images/" + this.props.data.rafael;
    const diogo = "images/" + this.props.data.diogo;
    const renato = "images/" + this.props.data.renato;
    const ricardo = "images/" + this.props.data.ricardo;
    const bio = this.props.data.bio;
    const bio1 = this.props.data.bio1;
    const bio2 = this.props.data.bio2;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="nine columns main-col">
              <h1>About Us</h1>
              <br></br>
              <h2>
                <li>
                  {bio}
                  {name}
                </li>
              </h2>
              <h2><li>{bio1}</li></h2>
              <h2><li>{bio2}</li></h2>
            </div>
          </div>
          <div className="row">
          <div className="column">
              <img
                className="profile-pic"
                src={diogo}
                alt="freixo"
              />
              <h2>Diogo Fontes</h2>
            </div>
            <div className="column">
              <img
                className="profile-pic"
                src={freixo}
                alt="freixo"
              />
              <h2>Filipe Freixo</h2>
            </div>
            <div className="column">
              <img
                className="profile-pic"
                src={rafael}
                alt="freixo"
              />
              <h2>Rafael Pereira</h2>
            </div>
            <div className="column">
              <img
                className="profile-pic"
                src={renato}
                alt="renato"
              />
              <h2>Renato Ourives</h2>
            </div>
            <div className="column">
              <img
                className="profile-pic"
                src={ricardo}
                alt="freixo"
              />
              <h2>Ricardo Antunes</h2>
            </div>
            
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;

import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const freixo = "images/" + this.props.data.freixo;
    const rafael = "images/" + this.props.data.rafael;
    const diogo = "images/" + this.props.data.freixo;
    const renato = "images/" + this.props.data.freixo;
    const ricardo = "images/" + this.props.data.freixo;
    const bio = this.props.data.bio;
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
                src={rafael}
                alt="freixo"
              />
              <h3>Filipe Freixo</h3>
              <p>Descricao freixo</p>  
            </div>
            <div className="column">
              <img
                className="profile-pic"
                src={freixo}
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
                src={freixo}
                alt="freixo"
              />
              <h3>Ricardo Antunes</h3>
              <p>Descricao antunes</p>
            </div>
            
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;

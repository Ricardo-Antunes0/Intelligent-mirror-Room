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
              <h2>About Us</h2>

              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Group 5</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      {street}
                      <br />
                      {city} {state}, {zip}
                    </span>
                    <br />
                    
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    
                  </p>
                </div>
              </div>
              <div className="column">
              <img
                className="profile-pic"
                src={freixo}
                alt="freixo"
              />
            </div>
            <div className="column">
              <img
                className="profile-pic"
                src={rafael}
                alt="freixo"
              />
            </div>
            <div className="column">
              <img
                className="profile-pic"
                src={freixo}
                alt="freixo"
              />
            </div>
            <div className="column">
              <img
                className="profile-pic"
                src={freixo}
                alt="freixo"
              />
            </div>
            <div className="column">
              <img
                className="profile-pic"
                src={freixo}
                alt="freixo"
              />
            </div>
            
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;

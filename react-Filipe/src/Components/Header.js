import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import {Link, NavLink} from 'react-router-dom'

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    
    const github = this.props.data.github;
    const name = this.props.data.name
    const description = this.props.data.description

    return (
      
        
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <div className="smoothscroll">
                <Link to="/">Home</Link> 
              </div>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
              About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
              Resume
              </a>
            </li>

            <li>
              <div className="smoothscroll">
              <Link to="/Portfolio">Work</Link>
              </div>
            </li>

          </ul>
        </nav>

        

        
     
    );
  }
}

export default Header;

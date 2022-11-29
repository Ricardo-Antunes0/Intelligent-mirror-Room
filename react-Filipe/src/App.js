import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";

import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Router>
        <Header data={this.state.resumeData.main} />
        {/* <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} /> */}
        
        
        
        
        <Routes>
          {/*<Portfolio data={this.state.resumeData.portfolio} />*/ }
          <Route exact path='/' element={<Home data={this.state.resumeData.main}/>}/>
          <Route exact path= '/Portfolio' element={<Portfolio />}/>
          


        </Routes>
        <Footer data={this.state.resumeData.main} />
        </Router>

      </div>
    );
  }
}

export default App;

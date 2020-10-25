import React, { Component, Fragment, useRef } from "react";
import scooter from "../assets/scooter.png";
import Navbar from "../components/navbar";

export default class home extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return (
      <Fragment>
        <div className="big-container">
          {/* <Navbar></Navbar> */}
          <div className="home-sections">
            <img src={scooter} alt="oidf" class="scooter"></img>
            <div className="entry-button">
              <a href="#" class="button instagram">
                <span className="gradient"></span>See how much you could save
              </a>
            </div>
            <div className="covid-text">
              Millions of people have been affected by Covid-19. <br></br>See
              how much money you could be missing out on.
            </div>
            <a
              href="#map"
              className="scroll-down smoothscroll"
              address="true"
            ></a>
          </div>
          {/* <div className="home-sections">
          <p>OK SCROLL !</p>
          <div style={{ height: "100vh" }}></div>
        </div> */}
        </div>
        <section id="map">
          <div className="data-container">
            <div className="data-box">
              <div className="data-box-left">
                <iframe
                  src="https://datastudio.google.com/embed/reporting/29af2348-5877-46a1-b8a9-71e8718d6de2/page/DjD"
                  frameborder="0"
                  style={{ border: "0", width: "100%", height: "100%" }}
                  scrolling="no"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="data-box-right">
                <h2>Header</h2>
                <p> some words</p>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

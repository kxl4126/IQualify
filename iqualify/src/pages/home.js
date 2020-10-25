import React, { Component, Fragment, useRef } from "react";
import scooter from "../assets/scooter.png";
import Navbar from "../components/navbar";

export default class home extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  scrollToMyRef = () => {
    console.log("FSAFSAF");
    window.scrollTo(0, this.myRef.current.offsetTop);
  };
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
          <div className="big-container">
            <h1>test</h1>
          </div>
        </section>
      </Fragment>
    );
  }
}

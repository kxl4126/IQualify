import React, { Component, Fragment, useRef } from "react";
import scooter from "../assets/scooter.png";
import map from "../assets/map.png";
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
            <h1 style={{fontFamily: "Pacifico", color:"rgb(17, 69, 255)", marginTop: "2%"}}>iQualify</h1>
            <img src={scooter} alt="oidf" class="scooter"></img>
            <div className="entry-button">
              <a href="/search" class="button instagram">
                <span className="gradient"></span>See how much you could claim
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
              <a href="https://datastudio.google.com/u/3/reporting/845ab9b4-8e7b-4c77-be71-bd84cef7f49c/page/rpllB">
                <img src={map} alt="oidf" class="map"></img>
              </a>
              <div className="data-box-right">
                <h1>Compensation Received per City</h1>
                <h3>
                  The map on the left displays the amount of money people have
                  gained access to per city using iQualify (click on the map to
                  get the most updated version).
                </h3>
              </div>
            </div>
            <div className="data-box">
              <div className="data-box-left">
                <iframe
                  src="https://datastudio.google.com/embed/u/0/reporting/5e655cc5-8c9a-4c30-8054-83e72a56488b/page/rpllB"
                  frameborder="0"
                  style={{ border: "0", width: "100%", height: "100%" }}
                  scrolling="no"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="data-box-right">
                <h1>Eligibility Stats</h1>
                <h3>
                  The chart on the left displays the proportion of people that
                  has been eligible for accessing aid through iQualify.
                </h3>
              </div>
            </div>
            <div className="data-box">
              <div className="data-box-left">
                <iframe
                  src="https://datastudio.google.com/embed/u/0/reporting/aefc9f00-07f7-4fb4-8d1c-825dd146f2c4/page/rpllB"
                  frameborder="0"
                  style={{ border: "0", width: "100%", height: "100%" }}
                  scrolling="no"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="data-box-right">
                <h1>Compensation over Time</h1>
                <h3>
                  The chart on the left displays the amount of money people have
                  gained access to over time using iQualify.
                </h3>
              </div>
            </div>
            <div className="data-box">
              <div className="data-box-left">
                <iframe
                  src="https://datastudio.google.com/embed/u/0/reporting/30afec3f-4c09-4d0d-a5e2-c858853c5fd3/page/rpllB"
                  frameborder="0"
                  style={{ border: "0", width: "100%", height: "100%" }}
                  scrolling="no"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="data-box-right">
                <h1>Overall Stats</h1>
                <h3>
                  The map on the left displays the total amount of money people
                  have gained access to using iQualify.
                </h3>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

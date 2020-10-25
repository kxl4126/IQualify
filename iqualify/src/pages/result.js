import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import mail from "../assets/mail.png";
import axios from "axios";

export default class result extends Component {
  state = {
    loading: true,
    benefits: 0,
  };
  static propTypes = {
    amount: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 2000);

    const params = new URLSearchParams(window.location.search);
    const eligible = params.get("eligible");
    const state = params.get("userState");
    const salary = params.get("salary");
    this.setState(
      {
        eligible: eligible == "yes" ? true : false,
        state,
        salary,
        benefits:
          state == "Texas"
            ? ((salary * 40 * 13) / 25)
                .toFixed(2)
                .replace(/\d(?=(\d{3})+\.)/g, "$&,")
            : ((salary * 40 * 12) / 26)
                .toFixed(2)
                .replace(/\d(?=(\d{3})+\.)/g, "$&,"),
      },
      () => {
        axios.post("/server?", {});
      }
    );
  }

  displayConfetti() {
    return (
      <Fragment>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
      </Fragment>
    );
  }
  render() {
    const { state, salary, eligible, loading, benefits } = this.state;

    if (!loading) {
      return (
        <div className="result-box">
          {!eligible ? (
            <Fragment>
              <div className="result-text">
                <h1 style={{ color: "red" }}>$0</h1>
              </div>
              <div class="entry-button">
                <span class="gradient" style={{ color: "red" }}>
                  {" "}
                  You are currently ineligible for benefits.
                </span>
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <div className="result-text confetti">
                <h1>${benefits}</h1>
                <span>
                  <div style={{ height: "100%" }}>/wk</div>
                </span>
                {this.displayConfetti()}
              </div>
              <div class="entry-button">
                <a
                  href="https://www.twc.texas.gov/jobseekers/unemployment-benefits-services"
                  class="button instagram"
                >
                  <span class="gradient"></span>Find out how to receive it
                </a>
              </div>
              <div className="covid-text">
                You are eligible to receive up to ${benefits}/wk from
                governmental aid. <br></br> Follow the button above to see how
                you can claim the money.
              </div>
              {/* <img src={mail} alt="oidf" class="mail"></img> */}
            </Fragment>
          )}
          {/* <div className="return-home-button">
            <Link to="/">
              <button type="button" className="btn btn-primary">
                Return home
              </button>
            </Link>
          </div> */}
        </div>
      );
    } else {
      return (
        <div className="loading-box">
          <div id="bg" class="light">
            <div id="gfol_wrap">
              <div class="gfol_c gfol_c1"></div>
              <div class="gfol_c gfol_c2"></div>
              <div class="gfol_c gfol_c3"></div>
              <div class="gfol_c gfol_c11"></div>
              <div class="gfol_c gfol_c4"></div>
              <div class="gfol_c gfol_c5"></div>
              <div class="gfol_c gfol_c6"></div>
              <div class="gfol_c gfol_c8"></div>
              <div class="gfol_c gfol_c9"></div>
              <div class="gfol_c gfol_c10"></div>
              <div class="gfol_c gfol_c12"></div>
              <div class="gfol_c gfol_c7"></div>
            </div>
          </div>
        </div>
      );
    }
  }
}

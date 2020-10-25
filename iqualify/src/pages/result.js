import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

export default class result extends Component {
  state = {
    loading: true,
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
    const loading = this.state.loading;
    const amount = 1;
    if (!loading) {
      return (
        <div className="result-box">
          <Navbar></Navbar>
          {amount == 0 ? (
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
                <h1>$500</h1>
                {this.displayConfetti()}
              </div>
              <div class="entry-button">
                <a href="#" class="button instagram">
                  <span class="gradient"></span>Access Your Money
                </a>
              </div>
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
        <div className="result-box">
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

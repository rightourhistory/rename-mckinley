import React from "react";
import "./splash.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default class Splash extends React.Component {
  render() {
    return (
      <div className="splash">
        <div className="splash__container">
          <h1 className="splash__headline">
            <span className="splash-headline splash-headline--1">Rename</span>{" "}
            <span className="splash-headline splash-headline--2">
              <em>McKinley</em>
            </span>{" "}
            <span className="splash-headline splash-headline--3">
              High School
            </span>
          </h1>
          {/* <a className="splash__cta" href="#">
            Sign the Petition
          </a> */}
        </div>
        {this.props.children}
      </div>
    );
  }
  componentDidMount() {
    let headlineText = document.querySelector(".splash-headline--2");
    if (!headlineText) return;
    let scrollTrigger = {
      trigger: ".splash-headline--2",
      start: "center center",
      end: "center -400px",
      scrub: true
    };
    gsap.to(headlineText, {
      scrollTrigger: scrollTrigger,
      x: -300,
      color: "#ced3cd",
      opacity: 0,
      ease: "none",
      duration: 1
    });
  }
}

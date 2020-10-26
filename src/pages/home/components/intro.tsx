import React from "react";
import "./intro.scss";

export default class Intro extends React.Component {
  render() {
    return ( 
      <div className="intro">
        <IntroPolicy />
      </div>
    )
  }
}

class IntroPolicy extends React.Component {
  render() {
    return (
      <div className="intro-policy">
        <div className="intro-policy__container">
          <p className="intro-policy__text">
            The provisions of this <a href="#">Hawaii policy*</a> states that:
          </p>
          <blockquote className="intro-policy__blockquote">
            The name of a school facility shall be a unique identifier... to identify the facility in other ways that bear ✨ positive association ✨ for the school, school-community, or public education.
          </blockquote>
          <p className="intro-policy__subtext">[EMOJI ADDED FOR EMPHASIS]</p>
        </div>
      </div>
    )
  }
}
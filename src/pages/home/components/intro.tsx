import React from "react";
import Marquee, { MarqueeMessage } from "../../../components/marquee";
import "./intro.scss";

export default class Intro extends React.Component {
  render() {
    return (
      <div className="intro">
        <IntroPolicy />
        <IntroAssociation />
      </div>
    );
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
            The name of a school facility shall be a unique identifier... to
            identify the facility in other ways that bear ✨ positive
            association ✨ for the school, school-community, or public
            education.
          </blockquote>
          <p className="intro-policy__subtext">[EMOJI ADDED FOR EMPHASIS]</p>
        </div>
      </div>
    );
  }
}

const messageArray: MarqueeMessage[] = [
  {
    line1: "SOURCE OF",
    line2: "AGRICULTURE",
    width: 370
  },
  {
    line1: "KEY PACIFIC",
    line2: "PORT",
    width: 330
  },
  {
    line1: "MILITARY",
    line2: "POSITIONING",
    width: 360
  },
  {
    line1: "TARIFF",
    line2: "AVOIDANCE",
    width: 325
  }
];

class IntroAssociation extends React.Component {
  render() {
    return (
      <div className="intro-association">
        <div className="intro-association__marquee">
          <Marquee messages={messageArray} />
        </div>
        <div className="intro-association__container">
          <div className="intro-association__column intro-association__column--1">
            <img src="https://via.placeholder.com/280x260.png/AC1D11/AC1D11" />
            <p>
              Well, let’s just say <s>William McKinley</s>’s association with
              the community of Hawai‘i has a less than positive history.
            </p>
            <p>
              In 1897, this man thrusted Hawai‘i into the United States when he
              illegally* annexed the kingdom for its natural resources and
              strategic military location.
            </p>
            <img src="https://via.placeholder.com/400x400.png/AC1D11/AC1D11" />
          </div>
          <div className="intro-association__column intro-association__column--2">
            <img src="https://via.placeholder.com/480x320.png/AC1D11/AC1D11" />
            <img src="https://via.placeholder.com/280x260.png/AC1D11/AC1D11" />
            <p>
              The native Alaskan community and its allies fought for a similar
              naming resolution with Mount <s>McKinley</s> for decades.
            </p>
            <p>After over 100 years, they succeeded*.</p>
            <p>It is now Hawai‘i’s turn! Eo!</p>
          </div>
        </div>
      </div>
    );
  }
}

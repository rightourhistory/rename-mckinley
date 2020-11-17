import React from "react";
import Marquee, { MarqueeMessage } from "../../../components/marquee";
import "./intro.scss";
import SourceLink from "../../../components/source-link";
import AnnexationCeremoney from "../../../images/annexation-ceremony-black.jpg";
import AnnexationClub from "../../../images/annexation-club-black.jpg";
import AnnexationMarines from "../../../images/annexation-marines-landing.jpg";
import GrainOverlay from "./grain-overlay";

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
          <h3 className="intro-policy__text" id="provisions-of-boe">
            The provisions of <strong>State of Hawaiʻi policy</strong> state
            that:
          </h3>
          <blockquote
            className="intro-policy__blockquote"
            aria-describedby="provisions-of-boe"
          >
            The name of a school facility shall be a unique identifier... to
            identify the facility in other ways that bear ✨ positive
            association ✨ for the school, school-community, or public
            education.
          </blockquote>
          <div className="intro-policy__subtext">
            <SourceLink href="http://boe.hawaii.gov/policies/6000series/Pages/6750.aspx" />
          </div>
        </div>
      </div>
    );
  }
}

const messageArray: MarqueeMessage[] = [
  {
    line1: "SOURCE OF",
    line2: "AGRICULTURE",
    width: 380
  },
  {
    line1: "KEY PACIFIC",
    line2: "PORT",
    width: 340
  },
  {
    line1: "MILITARY",
    line2: "POSITIONING",
    width: 370
  },
  {
    line1: "TARIFF",
    line2: "AVOIDANCE",
    width: 335
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
            <div
              className="intro-association__image"
              style={{
                width: "320px"
              }}
            >
              <GrainOverlay dark />
              <img src={AnnexationCeremoney} style={{ width: "320px" }} />
            </div>
            <p>
              Well, let’s just say <s>William McKinley</s>’s association with
              the community of Hawai‘i has a less than positive history.
            </p>
            <p>
              In 1897, this man thrusted Hawai‘i into the United States when he
              illegally* annexed the kingdom for its natural resources and
              strategic military location.
            </p>
            <div
              className="intro-association__image"
              style={{
                width: "420px"
              }}
            >
              <GrainOverlay dark />
              <img src={AnnexationMarines} style={{ width: "420px" }} />
            </div>
          </div>
          <div className="intro-association__column intro-association__column--2">
            <div className="intro-association__image">
              <GrainOverlay dark />
              <img src="https://via.placeholder.com/480x320.png/AC1D11/AC1D11" />
            </div>
            <div
              className="intro-association__image"
              style={{
                width: "360px"
              }}
            >
              <GrainOverlay dark />
              <img src={AnnexationClub} style={{ width: "360px" }} />
            </div>
            <p>
              The native Alaskan community and its allies fought for a similar
              naming resolution with Mount <s>McKinley</s> for decades.
            </p>
            <p>After over 100 years, they succeeded*.</p>
            <p>It is now Hawai‘i’s turn! Eō!</p>
          </div>
        </div>
      </div>
    );
  }
}

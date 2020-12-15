import React from "react";
import Marquee, { MarqueeMessage } from "../../../components/marquee";
import "./intro.scss";
import SourceLink, { SourceLinkSize } from "../../../components/source-link";
import AnnexationCeremoney from "../../../images/annexation-ceremony-black.jpg";
import AnnexationClub from "../../../images/annexation-club-black.jpg";
import AnnexationMarines from "../../../images/annexation-marines-landing.jpg";
import GrainOverlay from "./grain-overlay";

export default class Intro extends React.Component {
  render() {
    return (
      <div className="intro">
        <IntroParagraph>
          <p>
            What is currently called President William McKinley High School is
            one of the oldest secondary schools in the Hawaiian Islands. It was
            originally established in the Hawaiian Kingdom in 1865 as the Fort
            Street English Day School.
          </p>
          <p>
            In November 1869, it was relocated to Princess Ruth’s Palace, and in
            1895 it was renamed Honolulu High School. In 1907, the school was
            moved to the corner of Beretania and Victoria Streets and the
            school’s name was then changed to President William McKinley High
            School, for the leading role he played in bringing about the
            illegitimate “annexation” of the Hawaiian Kingdom to the United
            States.
          </p>
        </IntroParagraph>
        <IntroPolicy />
        <IntroAssociation />
      </div>
    );
  }
}

class IntroParagraph extends React.Component {
  render() {
    return (
      <div className="intro-paragraph">
        <div className="intro-paragraph__container">
          <div className="intro-paragraph__text">{this.props.children}</div>
        </div>
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
            <SourceLink
              href="http://boe.hawaii.gov/policies/6000series/Pages/6750.aspx"
              size={SourceLinkSize.Small}
            >
              State of Hawaiʻi Board of Education
            </SourceLink>
          </div>
        </div>
      </div>
    );
  }
}

const messageArray: MarqueeMessage[] = [
  {
    line1: "MANIFEST",
    line2: "DESTINY",
    width: 280
  },
  {
    line1: "COLONIZER OF",
    line2: "INDIGENOUS PEOPLE",
    width: 570
  },
  {
    line1: "PACIFIC",
    line2: "IMPERIALIST",
    width: 340
  },
  {
    line1: "DESIRED KEY",
    line2: "PACIFIC PORT",
    width: 370
  },
  {
    line1: "TARIFFED & GOADED",
    line2: "PLANTATION OWNERS",
    width: 610
  },
  {
    line1: "ENACTED UNLAWFUL",
    line2: "ANNEXATION",
    width: 570
  },
  {
    line1: "PRIORITIZED",
    line2: "AMERICAN INTERESTS",
    width: 590
  },
  {
    line1: "MISUSE OF",
    line2: "EXECUTIVE POWER",
    width: 515
  }
];

class IntroAssociation extends React.Component {
  render() {
    return (
      <div className="intro-association">
        <div className="intro-association__marquee">
          <Marquee duration={60} messages={messageArray} />
        </div>
        <div className="intro-association__container">
          <div className="intro-association__column intro-association__column--1">
            <div className="intro-association__image">
              <GrainOverlay dark />
              <img src={AnnexationCeremoney} style={{ width: "100%" }} />
            </div>
            <h2>
              Acknowledging <em>History</em>
            </h2>
            <p>
              The Hawaiian Kingdom never ceded to the United States. Renaming
              the school’s name and removing the statue are the right actions to
              correct the false narrative regarding the annexation of the
              Hawaiian Islands.
            </p>
            <h2>The School Deserves Better</h2>
            <p>
              The decision will neither diminish the ethos or the school’s
              achievements, nor negate the accomplishments of the alumni.
            </p>
            <p>
              On the contrary, the name change and statue removal will
              demonstrate the courage to tell the truth and thereby, bring even
              more esteem and reverence to everyone connected with the school –
              past, present, and future.
            </p>
            <div className="intro-association__video">
              <iframe
                id="video-kitv"
                src="https://www.youtube-nocookie.com/embed/i-ZBeKiYidE?modestbranding"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="intro-association__column intro-association__column--2">
            <div className="intro-association__video">
              <iframe
                id="video-hnn"
                src="https://www.youtube-nocookie.com/embed/gX7Vln312bc?modestbranding"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="intro-association__image">
              <GrainOverlay dark />
              <img src={AnnexationClub} style={{ width: "100%" }} />
            </div>
            <h2>Empowering Native Peoples Everywhere</h2>
            <p>
              In 2015, the native Alaskan community and its allies successfully
              renamed Mount <s data-text="Denali">McKinley</s>.
            </p>
            <p>
              Then, in 2018, the city of Arcata in Humboldt County removed its{" "}
              <s>McKinley</s> statue due to his actions that &ldquo;devastated
              the lives, cultures, and self-determination of Indigenous Peoples
              of the Pacific.&rdquo;
            </p>
            <p>It is now Hawai‘i’s turn. Eō!</p>
            <div>
              <SourceLink
                href="https://www.nps.gov/dena/learn/historyculture/denali-origins.htm"
                size={SourceLinkSize.Small}
              >
                National Park Service
              </SourceLink>
              <SourceLink
                href="https://www.cityofarcata.org/817/Measure-M"
                size={SourceLinkSize.Small}
              >
                City of Arcata
              </SourceLink>
              <SourceLink
                href="http://hdl.handle.net/10125/37601"
                size={SourceLinkSize.Small}
              >
                William S. Richard School of Law
              </SourceLink>
            </div>
            <div className="intro-association__image">
              <GrainOverlay dark />
              <img src={AnnexationMarines} style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

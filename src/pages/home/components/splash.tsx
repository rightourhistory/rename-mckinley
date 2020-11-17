import React from "react";
import "./splash.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { throttle } from "../../../helpers";
import GrainOverlay from "./grain-overlay";
gsap.registerPlugin(ScrollTrigger);

export default class Splash extends React.Component {
  private textRefsArray: (HTMLSpanElement | null)[];

  constructor(props: any) {
    super(props);
    this.textRefsArray = [];
    this.setFontSize = this.setFontSize.bind(this);
  }
  render() {
    return (
      <div className="splash">
        <div className="splash__container">
          <h1 className="splash__headline">
            <span
              className="splash-headline splash-headline--1"
              ref={ref => {
                this.textRefsArray[0] = ref;
              }}
            >
              Rename
            </span>{" "}
            <span
              className="splash-headline splash-headline--2"
              ref={ref => {
                this.textRefsArray[1] = ref;
              }}
            >
              <em>McKinley</em>
            </span>{" "}
            <span
              className="splash-headline splash-headline--3"
              ref={ref => {
                this.textRefsArray[2] = ref;
              }}
            >
              High School
            </span>
          </h1>
          <div className="splash__bottom-image">
            <img src="https://picsum.photos/800/400" />
          </div>
        </div>
        <GrainOverlay />
      </div>
    );
  }
  componentDidMount() {
    this.setHeaderGsap();
    this.setFontSize();
    const throttledSetFontSize = throttle(this.setFontSize, 75);
    window.onresize = throttledSetFontSize;
  }
  setHeaderGsap() {
    let headlineText = document.querySelector(".splash-headline--2");
    if (!headlineText) return;
    let scrollTrigger = {
      trigger: ".splash-headline--2",
      start: `center ${headlineText.getBoundingClientRect().top}px`,
      end: "center top",
      scrub: true
    };
    gsap.to(headlineText, {
      scrollTrigger: scrollTrigger,
      opacity: 0,
      ease: "none",
      duration: 1
    });
  }
  setFontSize() {
    this.textRefsArray.forEach(textRef => {
      textRef!.style.fontSize = null;
      textRef!.style.fontSize = window.getComputedStyle(
        this.textRefsArray[0]!
      ).fontSize;
    });
  }
}

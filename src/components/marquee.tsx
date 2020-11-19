import React from "react";
import "./marquee.scss";
import { TweenLite, Linear, gsap } from "gsap";
import { CSSPlugin } from "gsap/all";
gsap.registerPlugin(CSSPlugin);

export interface MarqueeMessage {
  line1: string;
  line2: string;
  width: number;
}

interface Props {
  duration: number;
  messages?: MarqueeMessage[];
}

export default class Marquee extends React.Component<Props> {
  private containerRef: React.RefObject<HTMLDivElement>;
  private svgRefsArray: SVGSVGElement[];

  constructor(props: any) {
    super(props);
    this.svgRefsArray = [];
    this.containerRef = React.createRef();
  }

  render() {
    let svgArray = this.props.messages!.map((message, i) => {
      return (
        <svg
          key={i}
          ref={ref => {
            if (ref) {
              this.svgRefsArray[i] = ref;
            }
          }}
          viewBox={`0 0 ${message.width} 100`}
          fill="#fff"
        >
          <text x="20" y="40">
            {message.line1 && <tspan x="0">{message.line1}</tspan>}
            {message.line2 && (
              <tspan x="0" dy="59">
                {message.line2}
              </tspan>
            )}
          </text>
        </svg>
      );
    });
    return (
      <div className="marquee">
        <div className="marquee__svgs" ref={this.containerRef}>
          {svgArray}
          {svgArray}
        </div>
      </div>
    );
  }

  componentDidMount() {
    const width = this.svgRefsArray
      .map((item: SVGSVGElement) => {
        const itemWidth = parseInt(
          `${item.getBoundingClientRect().width +
            parseFloat(
              getComputedStyle(item)
                .getPropertyValue("margin-right")
                .slice(0, -2)
            )}`
        );
        item.style.width = `${itemWidth}px`;
        item.style.marginRight = "0px";
        return itemWidth;
      })
      .reduce((accumulator: number, currentValue: any) => {
        if (currentValue) {
          return accumulator + currentValue;
        }
      }, 0);
    TweenLite.to(this.containerRef.current, {
      x: -width,
      duration: this.props.duration ? this.props.duration : 30,
      repeat: -1,
      ease: Linear.easeNone
    });
  }
}

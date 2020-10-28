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
  height?: string;
  messages?: MarqueeMessage[];
}

interface State {
  width?: number;
}

export default class Marquee extends React.Component<Props, State> {
  private containerRef: React.RefObject<HTMLDivElement>;
  private svgRefsArray: SVGSVGElement[] | null[];

  constructor(props: any) {
    super(props);
    this.svgRefsArray = [];
    this.containerRef = React.createRef();
    this.state = {
      width: undefined,
    };
  }

  render() {
    let svgArray;
    if (this.props.messages) {
      svgArray = this.props.messages.map((message, i) => {
        return (
          <svg
            key={i}
            ref={ref => {
              this.svgRefsArray[i] = ref;
            }}
            viewBox={`0 0 ${message.width} 100`}
            fill="#fff"
          >
            <text x="20" y="40">
              <tspan x="0">{message.line1}</tspan>
              <tspan x="0" dy="59">
                {message.line2}
              </tspan>
            </text>
          </svg>
        );
      });
    }
    return (
      <div
        className="marquee"
        ref={this.containerRef}
        style={{
          height: this.props.height,
          width: this.state.width,
        }}
      >
        {svgArray}
        {svgArray}
      </div>
    );
  }

  componentDidMount() {
    this.svgRefsArray.forEach((item: SVGSVGElement | null) => {
      if (item === null) return;
    });
    const width = this.svgRefsArray
      .map((item: SVGSVGElement | null) => {
        if (item) {
          return item.getBoundingClientRect().width + 40;
        }
      })
      .reduce((a: number, b: number) => {
        return a + b;
      }, 0);
    this.setState({
      width: width,
    });
    TweenLite.to(this.containerRef.current, {
      x: -width,
      duration: 30,
      repeat: -1,
      ease: Linear.easeNone,
    });
  }
}

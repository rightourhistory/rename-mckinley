import React from "react";
import "./splash.scss";
import head from "../../../images/mckinley-portrait-pukas.png";

export default class Splash extends React.Component {
  render() {
    return (
      <div className="splash">
        <div className="splash__container">
          <h1 className="splash__headline">
            Rename <em>McKinley</em> High School
          </h1>
          <a className="splash__cta" href="#">
            Sign the Petition
          </a>
        </div>
        <SplashHead />
      </div>
    );
  }
}

class SplashHead extends React.Component {
  private containerRef: React.RefObject<HTMLDivElement>;
  private eyeLeftRef: React.RefObject<HTMLDivElement>;
  private eyeRightRef: React.RefObject<HTMLDivElement>;

  constructor(props: any) {
    super(props);
    this.containerRef = React.createRef<HTMLDivElement>();
    this.eyeLeftRef = React.createRef<HTMLDivElement>();
    this.eyeRightRef = React.createRef<HTMLDivElement>();
  }

  render() {
    return (
      <div className="splash-head" ref={this.containerRef}>
        <div className="splash-head__container">
          <img className="splash-head__portrait" src={head} />
          <div
            className={`splash-head__eye splash-head__eye--left`}
            ref={this.eyeLeftRef}
          />
          <div
            className={`splash-head__eye splash-head__eye--right`}
            ref={this.eyeRightRef}
          />
        </div>
      </div>
    );
  }
  componentDidMount() {
    if (this.containerRef.current) {
      this.containerRef.current.addEventListener("mousemove", event => {
        this.updateEyePosition(event);
      });
    }
  }
  updateEyePosition(event: MouseEvent) {
    [this.eyeLeftRef.current, this.eyeRightRef.current].forEach(eye => {
      if (eye) {
        let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
        let y =
          eye.getBoundingClientRect().top +
          eye.clientHeight / 2 +
          window.scrollY;
        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rot = radian * (180 / Math.PI) * -1 + 270;
        eye.style.transform = `rotate(${rot}deg)`;
      }
    });
  }
}

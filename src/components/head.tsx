import React from "react";
import classNames from "classnames";
import "./head.scss";
import head from "../images/mckinley-portrait-pukas.png";
import { throttle } from "../helpers";

export enum HeadPosition {
  Centered = "centered",
  Left = "left"
}
interface Props {
  position?: HeadPosition;
}

export class Head extends React.Component<Props> {
  private eyeLeftRef: React.RefObject<HTMLDivElement>;
  private eyeRightRef: React.RefObject<HTMLDivElement>;

  constructor(props: any) {
    super(props);
    this.eyeLeftRef = React.createRef<HTMLDivElement>();
    this.eyeRightRef = React.createRef<HTMLDivElement>();
  }

  render() {
    return (
      <div
        className={classNames("head", {
          "head--left": this.props.position === HeadPosition.Left
        })}
      >
        <div className="head__container">
          <img className="head__portrait" src={head} />
          <div className={`head__eye head__eye--left`} ref={this.eyeLeftRef} />
          <div
            className={`head__eye head__eye--right`}
            ref={this.eyeRightRef}
          />
        </div>
      </div>
    );
  }
  componentDidMount() {
    if (document) {
      const updateEyePosition = throttle((event: any) => {
        this.updateEyePosition(event);
      }, 75);
      document.body.addEventListener("mousemove", updateEyePosition);
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
        eye.style.transform = `rotate(${rot}deg) translate3d(0, 0, 0)`;
      }
    });
  }
}

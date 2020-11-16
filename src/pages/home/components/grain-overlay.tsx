import React from "react";
import "./grain-overlay.scss";
import classNames from "classnames";

interface Props {
  dark?: boolean;
}

export default class GrainOverlay extends React.Component<Props> {
  render() {
    return (
      <div
        className={classNames("grain-overlay", {
          "grain-overlay--dark": this.props.dark
        })}
      />
    );
  }
}

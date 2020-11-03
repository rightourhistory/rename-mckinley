import React from "react";
import Icon from "../images/icon-external-link.inline.svg";
import "./source-link.scss";

interface Props {
  href: string;
}

export default class SourceLink extends React.Component<Props> {
  render() {
    return (
      <a className="source-link" href={this.props.href} target="_blank">
        Source
        <div className="source-link__icon">
          <Icon />
        </div>
      </a>
    );
  }
}

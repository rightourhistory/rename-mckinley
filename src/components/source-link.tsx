import React from "react";
import Icon from "../images/icon-external-link.inline.svg";
import "./source-link.scss";

export enum SourceLinkSize {
  Small = "small",
  Large = "large"
}

interface Props {
  href: string;
  size?: SourceLinkSize;
}

export default class SourceLink extends React.Component<Props> {
  render() {
    if (this.props.size) {
      switch (this.props.size) {
        case SourceLinkSize.Small:
      }
    }
    return (
      <a
        className={`source-link ${this.props.size &&
          `source-link--${this.props.size}`}`}
        href={this.props.href}
        target="_blank"
      >
        Source
        {this.props.children && (
          <>
            {": "}
            <div className="source-link__body">{this.props.children}</div>
          </>
        )}
        <div className="source-link__icon">
          <Icon />
        </div>
      </a>
    );
  }
}

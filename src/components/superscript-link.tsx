import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import "./superscript-link.scss";

interface Props {
  id: string;
}

export default class SuperscriptLink extends React.Component<Props> {
  render() {
    return (
      <a
        className="superscript-link"
        href={`#${this.props.id}`}
        aria-describedby="references-label"
      >
        {this.props.children}
      </a>
    );
  }
}

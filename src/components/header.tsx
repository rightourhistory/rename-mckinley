import React from "react";
import classNames from "classnames";
import "./header.scss";
import Logo from "../images/logo-rohh.inline.svg";
import { HeadPosition } from "./head";

interface Props {
  onToggleHeader(position: HeadPosition): any;
  text?: string;
}

interface State {
  scrolledDown?: boolean;
}

export default class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      scrolledDown: false
    };
  }
  render() {
    return (
      <>
        <div
          className={classNames("header", {
            "header--full": this.state.scrolledDown
          })}
          id="header"
        >
          <div className="header__logo">
            <Logo aria-label="logo" />
          </div>
          <a
            className="header__cta"
            href="https://sign.moveon.org/petitions/restore-original-name"
            target="_blank"
          >
            Sign the Petition
          </a>
        </div>
        <div
          className="splash-bottom-observable"
          id="splash-bottom-observable"
        />
      </>
    );
  }
  componentDidMount() {
    if ("IntersectionObserver" in window) {
      const bottomElement = document.getElementById("splash-bottom-observable");
      if (!bottomElement) return;

      let splashObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.setState({ scrolledDown: false });
            this.props.onToggleHeader(HeadPosition.Left);
          } else {
            this.setState({ scrolledDown: true });
            this.props.onToggleHeader(HeadPosition.Centered);
          }
        });
      });

      splashObserver.observe(bottomElement);
    }
  }
}

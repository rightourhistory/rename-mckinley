import React from "react";
import classNames from "classnames";
import "./header.scss";
import Logo from "../images/logo-rohh.svg";

interface Props {
  text?: string;
}

interface State {
  scrolledPastSplash?: boolean;
}

export default class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      scrolledPastSplash: false
    };
  }
  render() {
    return (
      <>
        <div
          className={classNames("header", {
            "header--slide-in": this.state.scrolledPastSplash
          })}
          id="header"
        >
          <div className="header__logo">
            <Logo aria-label="logo" />
          </div>
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
            this.setState({ scrolledPastSplash: false });
          } else {
            this.setState({ scrolledPastSplash: true });
          }
        });
      });

      splashObserver.observe(bottomElement);
    }
  }
}

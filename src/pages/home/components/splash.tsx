import React from "react";
import "./splash.scss";

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
      </div>
    );
  }
}

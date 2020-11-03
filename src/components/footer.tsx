import React from "react";
import "./footer.scss";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <h2 id="references-label">References</h2>
        <FooterReferences />
      </footer>
    );
  }
}

class FooterReferences extends React.Component {
  render() {
    return (
      <ol className="footer-footnotes">
        <li id="boe6750">
          Naming of Schools and School Facilities, State of Hawaiʻi Board of
          Education. §§ 6750 B.{" "}
          <a
            href="http://boe.hawaii.gov/policies/6000series/Pages/6750.aspx"
            target="_blank"
          >
            http://boe.hawaii.gov/policies/6000series/Pages/6750.aspx
          </a>{" "}
          (2007)
        </li>
      </ol>
    );
  }
}

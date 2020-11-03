import React from "react";
import "./footer.scss";
import Icon from "../images/icon-external-link.inline.svg";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__container">
          <h2 className="footer__title" id="references-label">
            Further reading
          </h2>
          <FooterReferences>
            <FooterReferencesItem
              href="http://boe.hawaii.gov/policies/6000series/Pages/6750.aspx"
              title="State of Hawaiʻi Board of Education Policy 6750"
              label="State of Hawaiʻi"
            />
          </FooterReferences>
        </div>
      </footer>
    );
  }
}

class FooterReferences extends React.Component {
  render() {
    return <ul className="footer-references">{this.props.children}</ul>;
  }
}

interface FooterReferencesItemProps {
  href: string;
  label?: string;
  title: string;
}

class FooterReferencesItem extends React.Component<FooterReferencesItemProps> {
  render() {
    return (
      <li className="footer-references-item">
        <a
          className=" footer-references-item__link"
          href={this.props.href}
          target="_blank"
        >
          <h4 className="footer-references-item__title">{this.props.title}</h4>
          <div className="footer-references-item__icon">
            <Icon />
          </div>
        </a>
        <h6 className=" footer-references-item__label">{this.props.label}</h6>
      </li>
    );
  }
}

import React from "react";
import "./footer.scss";
import Logo from "../images/logo-rohh.inline.svg";
import InstagramLogo from "../images/logo-instagram.inline.svg";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__logo">
            <Logo />
          </div>
          <div className="footer__links">
            <a
              className="footer__link"
              href="mailto:rightourhistoryhawaii@gmail.com"
            >
              CONTACT
            </a>
            <a
              className="footer__link footer__link--social"
              href="https://www.instagram.com/rightourhistoryhawaii/"
              target="_blank"
            >
              <InstagramLogo />
            </a>
          </div>
        </div>
        <div className="footer__copyright">
          <span>© Right Our History Hawaii 2020</span>
          <span>
            Website by{" "}
            <a href="http://taylorkmho.com" target="_blank">
              tellaho
            </a>
          </span>
        </div>
      </footer>
    );
  }
}

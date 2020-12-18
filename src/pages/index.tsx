import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/header";
// import HistoryGroup from "./home/components/history-group";
import Intro from "./home/components/intro";
import { Head, HeadPosition } from "../components/head";
import Splash from "./home/components/splash";
import "./index.scss";
// import Footer from "../components/footer";
import FiveReasons from "./home/components/five-reasons";
import RequestLetter from "./home/components/request-letter";
import Footer from "../components/footer";

interface State {
  headPosition: HeadPosition;
}

export default class Home extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      headPosition: HeadPosition.Centered
    };
    this.toggleHeadPosition = this.toggleHeadPosition.bind(this);
  }
  render() {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Right Our History Hawaii</title>
          <link rel="canonical" href="http://rightourhistoryhawaii.com" />
          <script
            async
            defer
            data-domain="rightourhistoryhawaii.com"
            src="https://plausible.io/js/plausible.js"
          ></script>
        </Helmet>
        <main className="main">
          <Header onToggleHeader={this.toggleHeadPosition} />
          <Head position={this.state.headPosition} />
          <Splash />
          <Intro />
          <FiveReasons />
          <RequestLetter />
          <Footer />
        </main>
      </>
    );
  }
  toggleHeadPosition(position: HeadPosition) {
    if (position === HeadPosition.Centered) {
      this.setState({ headPosition: HeadPosition.Left });
    } else {
      this.setState({ headPosition: HeadPosition.Centered });
    }
  }
}

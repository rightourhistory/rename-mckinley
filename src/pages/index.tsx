import React from "react";
import Header from "../components/header";
import HistoryGroup from "./home/components/history-group";
import Intro from "./home/components/intro";
import { Head, HeadPosition } from "../components/head";
import Splash from "./home/components/splash";
import "./index.scss";
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
      <main className="main">
        <Header onToggleHeader={this.toggleHeadPosition} />
        <Head position={this.state.headPosition} />
        <Splash />
        <Intro />
        <HistoryGroup />
        <Footer />
      </main>
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

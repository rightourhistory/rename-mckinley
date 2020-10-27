import React from "react";
import Header from "../components/header";
import HistoryGroup from "./home/components/history-group";
import Intro from "./home/components/intro";
import Splash from "./home/components/splash";
import "./index.scss";

export default function Home() {
  return ( 
    <>
      <Header />
      <Splash />
      <Intro />
      <HistoryGroup />
    </>
  )
}

import React from "react";
import Header from "../components/header";
import Intro from "./home/components/intro";
import Splash from "./home/components/splash";
import "./index.scss";

export default function Home() {
  return ( 
    <>
      <Header />
      <Splash />
      <Intro />
    </>
  )
}

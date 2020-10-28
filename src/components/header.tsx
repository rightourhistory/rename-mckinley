import React from "react";
import "./header.scss";

interface Props {
  text?: string;
}

export default function Header(props: Props) {
  return (
    <div className="header">
      <h1>A MOVEMENT FOR THE PEOPLE OF HAWAI'I</h1>
    </div>
  );
}

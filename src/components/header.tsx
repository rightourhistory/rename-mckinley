import React from "react"

interface Props {
  text?: string;
}

export default function Header(props: Props) {
  return (
    props.text ? <h1>{props.text}</h1> : <h1>Default</h1>
  );
}
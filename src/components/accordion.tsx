import React from "react";
import classNames from "classnames";
import "./accordion.scss";

export interface AccordionMessage {
  title: string;
  body: JSX.Element;
}

interface Props {
  messages: AccordionMessage[];
}

interface State {
  currentIndex?: number;
}

export default class Accordion extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
    this.toggleIndex = this.toggleIndex.bind(this);
  }
  render() {
    const messages = this.props.messages.map((message, i) => {
      let shouldOpen;
      if (
        (this.state.currentIndex === 0 && i === 0) ||
        this.state.currentIndex === i
      ) {
        shouldOpen = true;
      }
      return (
        <button
          className={classNames("accordion__item", {
            "accordion__item--open": shouldOpen
          })}
          onClick={() => {
            this.toggleIndex(i);
          }}
        >
          <div>
            <h4 className="accordion__title">{message.title}</h4>
            <div className="accordion__body">{message.body}</div>
          </div>
        </button>
      );
    });
    return <div className="accordion">{messages}</div>;
  }
  toggleIndex(index: number) {
    if (this.state.currentIndex === index) {
      this.setState({ currentIndex: undefined });
    } else {
      this.setState({ currentIndex: index });
    }
  }
}

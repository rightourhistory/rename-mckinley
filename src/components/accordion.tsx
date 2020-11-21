import React from "react";
import classNames from "classnames";
import "./accordion.scss";
import Icon from "../images/icon-plus.inline.svg";

export interface AccordionMessage {
  title: string | JSX.Element;
  body: JSX.Element;
}

interface AccordionItemEl {
  maxHeight?: string;
  title: string | JSX.Element;
}

interface Props {
  messages: AccordionMessage[];
}

interface State {
  currentIndex?: number;
  elements?: AccordionItemEl[];
}

export default class Accordion extends React.Component<Props, State> {
  refsArray: (HTMLDivElement | null)[];
  constructor(props: Props) {
    super(props);
    this.refsArray = [];
    let arr = props.messages.map(item => {
      return {
        title: item.title
      };
    });
    this.state = {
      elements: arr
    };
    this.toggleIndex = this.toggleIndex.bind(this);
    this.setElementHeights = this.setElementHeights.bind(this);
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
        <div
          className={classNames("accordion__item", {
            "accordion__item--open": shouldOpen
          })}
          key={`accordion-item-${i}`}
        >
          <div>
            <h4
              className="accordion__title"
              onClick={() => {
                this.toggleIndex(i);
              }}
            >
              {message.title}
            </h4>
            <div
              className="accordion__body"
              ref={ref => {
                this.refsArray[i] = ref;
              }}
            >
              {message.body}
            </div>
          </div>
          <button
            className="accordion__icon"
            onClick={() => {
              this.toggleIndex(i);
            }}
          >
            <Icon />
          </button>
        </div>
      );
    });
    return <div className="accordion">{messages}</div>;
  }
  componentDidMount() {
    this.setElementHeights();
  }
  setElementHeights() {
    this.refsArray.forEach((ref, i) => {
      if (!ref || !this.state.elements) return;
      const height = ref.getBoundingClientRect().height;
      const elements = this.state.elements;
      const updatedElements = [...elements];
      ref.style.maxHeight = "0px";
      updatedElements[i].maxHeight = `${height}px`;
      this.setState({
        ...this.state,
        elements: {
          ...updatedElements
        }
      });
    });
  }
  toggleIndex(index: number) {
    this.refsArray.forEach(ref => {
      ref!.style.maxHeight = "0px";
    });
    if (this.state.currentIndex === index) {
      this.setState({ currentIndex: undefined });
    } else {
      this.refsArray[index]!.style.maxHeight = this.state.elements![
        index
      ].maxHeight!;
      this.setState({ currentIndex: index });
    }
  }
}

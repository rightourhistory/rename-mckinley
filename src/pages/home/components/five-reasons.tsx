import React from "react";
import Accordion, { AccordionMessage } from "../../../components/accordion";
import "./five-reasons.scss";

const accordionMessages: AccordionMessage[] = [
  {
    title: "The McKinley Tariff, 1890",
    body: (
      <p>
        When Willian McKinley substantially reduced the income of Hawaiʻi sugar
        growers from $12.2M in 1890 to $7.0M in 1892, he effectively goaded them
        into the 1893 overthrow of Queen Liliʻuokalani in order to revive their
        profits through Annexation.
      </p>
    )
  },
  {
    title: "Kūʻe Petitions & Queen Liliʻuokalani Official Protest, 1897",
    body: (
      <p>
        When word spread that an adamant push for annexation of the Hawaiian
        Kingdom by the U.S. was progressing members of the Hui Hawaiʻi Aloha
        ʻĀina
      </p>
    )
  },
  {
    title: "“Treaty of Annexation” 1898",
    body: (
      <>
        <p>
          In a private conversation with Assistant Secretary George Cortelyou,
          President William McKinley said, “We need Hawaiʻi just as much as a
          good deal more than we did California. It is Manifest Destiny (Morgan
          296). This guiding light of Manifest Destiny McKinley spoke of “is the
          idea that the United States is destined--by God, its advocates
          believed--to expand its dominion and spread democracy and capitalism
          across the entire North American Continent” (www.history.com).
        </p>
        <p>
          For McKinley’s selfish interests, it was imperative that Manifest
          Destiny float across the Pacific Ocean, knowing very well that it
          would deprive Hawaiʻi’s native people of their identity, language,
          culture, health, land, and everything that makes a native people
          native.
        </p>
        <p>
          After two failed attempts to legally annex Hawaiʻi on June 16 and
          September 7 of 1897, he settled for the illegal route: a joint
          resolution, known as Newlands Resolution, which was signed on July 6,
          1898. A joint resolution does not have the necessary power to annex an
          internationally recognized country, which still to this day, Hawaiʻi
          is. As Senator Augustus O. Bacon, of Georgia said during the public
          Senate debates of 1898, “If Hawaiʻi could be acquired by a joint
          resolution, then the Legislature of Hawaiʻi could acquire the United
          States by a joint resolution of its own” (Chang 80).
        </p>
      </>
    )
  },
  {
    title: "Programme for Patriotic Exercises, 1906",
    body: (
      <>
        <p>
          Jump into the time machine and imagine yourself a young student whose
          parents, just nine years prior, signed their loyalty to the Hawaiian
          Kingdom with their signature on the Kūʻe Petitions in opposition of
          being annexed to the United States. Upon arriving at your public
          school, you join a circle around a flagpole with the rest of your
          classmates, cheering three times as the American flag is hoisted up.
          When you enter into class, you and your classmates stand alongside
          your desks, and in unison, everyone recites the following salutation:
        </p>
        <p>
          “We give our heads and our hearts to God and our Country! One Country!
          One language! One Flag!”
        </p>
      </>
    )
  },
  {
    title:
      "Honolulu High School is renamed President William McKinley High School, 1907",
    body: <p></p>
  }
];

export class FiveReasons extends React.Component {
  render() {
    return (
      <div className="five-reasons">
        <div className="five-reasons__container">
          <h3 className="five-reasons__title">
            <strong>5 REASONS</strong> TO RENAME MCKINLEY HIGH SCHOOL
          </h3>
          <div className="five-reasons__accordion">
            <Accordion messages={accordionMessages} />
          </div>
        </div>
      </div>
    );
  }
}

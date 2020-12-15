import React from "react";
import Accordion, { AccordionMessage } from "../../../components/accordion";
import "./five-reasons.scss";
import SourceLink from "../../../components/source-link";
import PatrioticExercises from "../../../images/patriotic-exercises.jpg";

const accordionMessages: AccordionMessage[] = [
  {
    title: "The McKinley Tariff Produces Devious Insurgents, 1890",
    body: (
      <>
        <p>
          As a U.S. Congressman, McKinley sponsored and successfully passed a
          bill enforcing a tariff on sugar imports which deliberately threatened
          the sugar industry in the Hawaiian Kingdom.
        </p>
        <p>
          This act, known as “The McKinley Tariff,” raised rates on imports and
          substantially reduced the income of Hawaiʻi sugar growers from $12.2M
          in 1890 to $7M in 1892. Essentially, McKinley effectively goaded a
          group of sugar planters into becoming insurgents to overthrow Queen
          Liliʻuokalani in order to establish a provisional government with the
          ultimate goal of annexation to the United States.
        </p>
        <SourceLink href="https://history.house.gov/Historical-Highlights/1851-1900/The-McKinley-Tariff-of-1890/">
          Office of the Historian (U.S. Gov&rsquo;t)
        </SourceLink>
      </>
    )
  },
  {
    title:
      "Kūʻe Petitions & Queen Liliʻuokalani Patriotically Protest Annexation, 1897",
    body: (
      <>
        <p>
          The people’s love of their nation, land, and way of life were being
          threatened by a potential annexation by the United States. Members of
          the Hawaiian Patriotic League, called the Hui Hawaiʻi Aloha ʻĀina,
          gathered 21,269 signatures on a 556-paged petition named, “Petition
          Against Annexation.”
        </p>
        <p>
          It represented 95% of the native adult population of Hawaiʻi at the
          time. Names on the petition were also from loyal subjects of the
          Hawaiian Kingdom, as well as foreign nationals.
        </p>
        <SourceLink href="https://www.archives.gov/education/lessons/hawaii-petition">
          Archives.gov
        </SourceLink>
      </>
    )
  },
  {
    title: "The Fake Treaty of Annexation, 1898",
    body: (
      <>
        <p>
          The U.S. took the Hawaiian Kingdom without permission or mutual
          consent. <b>There still is no Treaty of Annexation</b> between the
          Hawaiian Kingdom and the United States of America.
        </p>
        <p>
          After two failed attempts to annex Hawaiʻi on June 16 and September 7
          of 1897, President McKinley used The Newlands Resolution, a joint U.S.
          Congressional action, to illegitimately claim U.S. annexation of the
          Hawaiian Islands. A joint Resolution in the U.S. Congress is an
          invalid document that has no power to allow the United States to annex
          an internationally recognized country.
        </p>
        <p>
          In actuality, the “annexation” was a bogus, diplomatic fraud between
          the McKinley administration and the insurgents in Hawaiʻi who, with
          the foreknowledge of the U.S. Minister to Hawaii (John Stevens) and
          the assistance of the U.S. marines, successfully forced Queen
          Liliʻuokalani to yield her Regency on January 16, 1893. McKinley’s
          actions ultimately displaced Native Hawaiians in their
          homeland--physically, mentally, emotionally, and spiritually.
        </p>
        <SourceLink href="http://hdl.handle.net/10125/37601">
          William S. Richard School of Law
        </SourceLink>
      </>
    )
  },
  {
    title:
      "Programme for Patriotic Exercises Brainwashes Hawaiʻi Students, 1906",
    body: (
      <>
        <div
          style={{
            float: "right",
            height: 0,
            marginLeft: "2rem",
            marginTop: "3rem",
            paddingBottom: "37.21%",
            width: "25%"
          }}
        >
          <img src={PatrioticExercises} style={{ width: "100%" }} />
        </div>
        <p>
          Promoting President McKinley’s expansionist goals, the United States
          replaced the public school curriculum of the Hawaiian Kingdom and also
          introduced the Programme for Patriotic Exercises as a means of
          systematic indoctrination for children to believe they were
          “Americans.” In the philosophy of Manifest Destiny, the objectives of
          this new propaganda were to systematically denationalize the citizens
          of the Hawaiian Islands and deprive Hawaiʻi’s native people of their
          national status, identity, language, culture, health, land, and other
          freedoms.
        </p>
        <p>
          A prime example of this was when students entered into class, they
          stood alongside their desks, and in unison, recited the following
          salutation:
        </p>
        <blockquote>
          &ldquo;We give our heads and our hearts to God and our Country! One
          Country! One language! One Flag!&rdquo;
        </blockquote>
      </>
    )
  },
  {
    title: "Honolulu High School Falls, McKinley Statue Rises, 1907 & 1911",
    body: (
      <>
        <p>
          Disregarding its location and students, Honolulu High School was
          renamed President William McKinley High School to honor the 25th
          president, “whose influence helped to bring about the annexation of
          the Hawaiian Islands to the United States.”
        </p>
        <p>
          Four years later, a bronze, eight-ton statue of McKinley was erected
          as a memorial to the U.S. president who is responsible for intentional
          actions to illegally acquire the Hawaiian Kingdom for the United
          States and eradicate its existence.
        </p>
        <p>
          The name of the school and statue symbolizes a leader who ignored
          international law by assimilating the Hawaiian Kingdom, politically,
          culturally, socially, and economically, into the United States. The
          most egregious aspect of the statue is that he is holding a scroll in
          his right hand inscribed, “Treaty of Annexation,” which is an outright
          lie.
        </p>
        <SourceLink href="http://www.mhs150years.com">
          McKinley High School
        </SourceLink>
      </>
    )
  }
];

export default class FiveReasons extends React.Component {
  render() {
    return (
      <div className="five-reasons">
        <div className="five-reasons__container">
          <h3 className="five-reasons__title">
            <strong>5 REASONS</strong> TO RENAME MCKINLEY HIGH SCHOOL{" "}
            <span>AND REMOVE HIS STATUE</span>
          </h3>
          <div className="five-reasons__accordion">
            <Accordion messages={accordionMessages} />
          </div>
        </div>
      </div>
    );
  }
}

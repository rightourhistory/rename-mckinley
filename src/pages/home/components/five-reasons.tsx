import React from "react";
import Accordion, { AccordionMessage } from "../../../components/accordion";
import "./five-reasons.scss";
import SourceLink from "../../../components/source-link";
import PatrioticExercises from "../../../images/patriotic-exercises.jpg";

const accordionMessages: AccordionMessage[] = [
  {
    title: "The McKinley Tariff, 1890",
    body: (
      <>
        <p>
          When Willian McKinley substantially reduced the income of Hawaiʻi
          sugar growers from $12.2M in 1890 to $7.0M in 1892, he effectively
          goaded them into the 1893 overthrow of Queen Liliʻuokalani in order to
          revive their profits through Annexation.
        </p>
        <SourceLink href="https://history.house.gov/Historical-Highlights/1851-1900/The-McKinley-Tariff-of-1890/">
          Office of the Historian (U.S. Gov&rsquo;t)
        </SourceLink>
      </>
    )
  },
  {
    title: "Kūʻe Petitions & Queen Liliʻuokalani Official Protest, 1897",
    body: (
      <>
        <p>
          When word spread that an adamant push for annexation of the Hawaiian
          Kingdom by the U.S. was progressing, members of the Hui Hawaiʻi Aloha
          ʻĀina gathered 21. 269 Native Hawaiian signatures on a 556-paged
          petition named, &ldquo;Petition Against Annexation.&rdquo; With Queen
          Liliʻuokalani, four delegates met with Senator George Hoar, &ldquo;who
          read the petition to the Senate [and] it was formally accepted.&rdquo;
          Ultimately, the proposed treaty to annex Hawaiʻi was unsuccessful in
          the Senate.
        </p>
        <SourceLink href="https://www.archives.gov/education/lessons/hawaii-petition">
          Archives.gov
        </SourceLink>
      </>
    )
  },
  {
    title: <>&ldquo;Treaty of Annexation&rdquo; 1898</>,
    body: (
      <>
        <p>
          In a private conversation with Assistant Secretary George Cortelyou,
          President William McKinley said, &ldquo;We need Hawaiʻi just as much
          as a good deal more than we did California. It is Manifest Destiny
          .&rdquo;
        </p>
        <p>
          This guiding light of Manifest Destiny McKinley spoke of &ldquo;is the
          idea that the United States is destined--by God, its advocates
          believed--to expand its dominion and spread democracy and capitalism
          across the entire North American Continent.&rdquo;
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
          is.
        </p>
        <p>
          As Senator Augustus O. Bacon, of Georgia said during the public Senate
          debates of 1898, &ldquo;If Hawaiʻi could be acquired by a joint
          resolution, then the Legislature of Hawaiʻi could acquire the United
          States by a joint resolution of its own&rdquo; (Chang 80).
        </p>
        <SourceLink href="https://books.google.com/books?id=vYF3AAAAMAAJ&pg=PA296&lpg=PA296">
          Morgan, H. Wayne.
        </SourceLink>
        <SourceLink href="https://www.history.com/topics/westward-expansion/manifest-destiny">
          History.com
        </SourceLink>
        <SourceLink href="http://hdl.handle.net/10125/37601">
          William S. Richard School of Law
        </SourceLink>
      </>
    )
  },
  {
    title: "Programme for Patriotic Exercises, 1906",
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
          Jump into the time machine and imagine yourself a young student whose
          parents, just nine years prior, signed their loyalty to the Hawaiian
          Kingdom with their signature on the Kūʻe Petitions in opposition of
          being annexed to the United States. Upon arriving at your public
          school, you join a circle around a flagpole with the rest of your
          classmates, cheering three times as the American flag is hoisted up.
        </p>
        <p>
          When you enter into class, you and your classmates stand alongside
          your desks, and in unison, everyone recites the following salutation:
        </p>
        <p>
          <blockquote>
            &ldquo;We give our heads and our hearts to God and our Country! One
            Country! One language! One Flag!&rdquo;
          </blockquote>
        </p>
      </>
    )
  },
  {
    title:
      "Honolulu High School is renamed President William McKinley High School, 1907",
    body: (
      <>
        <p>
          Disregarding its location and students, Honolulu High School was
          renamed President William McKinley High to honor the 25th president,
          &ldquo;whose influence helped to bring about the annexation of the
          Hawaiian Islands to the United States.&rdquo;
        </p>
        <p>
          This illegal annexation helped displace Native Hawaiians in their
          homeland physically, mentally, emotionally, and spiritually.
        </p>
        <p>
          To commemorate this man, in 1911, a bronze, eight-ton &ldquo;statue of
          President McKinley was commissioned for $8,000&rdquo; and dedicated to
          the school.
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

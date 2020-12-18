import React from "react";
import classNames from "classnames";
import "./request-letter.scss";
import DownSVG from "../../../images/icon-down.inline.svg";

interface State {
  expanded?: boolean;
}

export default class RequestLetter extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.toggleExpand = this.toggleExpand.bind(this);
    this.state = {
      expanded: false
    };
  }
  render() {
    return (
      <div
        className={classNames("request-letter", {
          "request-letter--folded": !this.state.expanded
        })}
      >
        <div className="request-letter__eyebrow">
          <h3>Request to the Board of Education</h3>
          <h2>
            Our Letter to
            <br />
            Superintendent
            <br />
            Dr. Kishimoto
          </h2>
        </div>
        <article className="request-letter__body" onClick={this.toggleExpand}>
          {!this.state.expanded && (
            <button
              className="request-letter__body__fold"
              onClick={this.toggleExpand}
            >
              <span>OPEN</span>
              <DownSVG />
            </button>
          )}
          <div className="request-letter-body">
            {/* <header className="request-letter-body__header">
              <time>September 03, 2020</time>
              <h4>
                Dr. Christina M. Kishimoto, Superintendent
                <br />
                Hawaiʻi State Department of Education
              </h4>
              <address>
                1390 Miller Street
                <br />
                Honolulu, Hawaiʻi 96813
              </address>
            </header> */}
            <main className="request-letter-body__main">
              <p>Aloha e Dr. Kishimoto,</p>
              <p>
                This letter requests your support to change the name of
                President William McKinley High School. The honor given to
                McKinley celebrates dishonorable and reprehensible actions by
                him as President in pushing for U.S. appropriation of Hawaiʻi
                while knowing fully that more than 90% of the population wanted
                the restoration of their Queen and their kingdom. I am
                requesting this change under the provisions of Board of
                Education Policy 301-8, Naming of Schools and School Facilities:
              </p>
              <blockquote>
                “The name of a school shall be recommended by the Superintendent
                of Education. The recommendation, with its supporting reasons,
                shall be submitted to the Board of Education for approval.”
              </blockquote>
              <p>
                William McKinley is not only undeserving of having a school in
                Hawaiʻi named after him, but is also unworthy of a statue being
                erected in his honor.
              </p>
              <p>
                In 1907, Honolulu High School was renamed President William
                McKinley High School because, according to the school website,
                McKinley “helped to bring about the annexation of the Hawaiian
                Islands to the United States.”
              </p>
              <p>
                But that underestimates his role. This is the same McKinley
                responsible for the McKinley Tariff, which substantially reduced
                the income of Hawaiʻi sugar growers from $12,159,084 in 1890 to
                $6,963,504 in 1892, and effectively goaded them into the 1893
                overthrow of Queen Liliʻuokalani in order to revive their
                profits through Annexation.
              </p>
              <p>
                Five years after the Overthrow, during an Annexation debate in
                the Senate on May 31, 1898, Senator John Morgan (known for The
                Morgan Report) commented:{" "}
              </p>
              <blockquote>
                “The President of the United States (McKinley) has got his mind
                made up that as a matter of military necessity he is obliged to
                take those islands and intends to do it.”
              </blockquote>
              <p>
                There was no military necessity. Instead, there was the ideology
                of Manifest Destiny, under which the U.S. crushed Indian nations
                as it expanded its control across the continent, and then the
                Pacific, taking the Philippines, Guam and Hawaiʻi as well.
              </p>
              <p>
                Prior to Hawaiʻi being illegally annexed, both the Kūʻē
                Petitions, objecting Annexation and signed by 95% of native
                Hawaiian adults, and also Queen Liliʻuokalani’s letter of
                protest, had reached Congress. It was well known by all in
                Congress that the newly established government, the Republic of
                Hawaiʻi, which was a product of the Overthrow, did not represent
                the will of the people. The U.S. Constitution requires a “Yes”
                vote by two-thirds of those present in the U.S. Senate in order
                to ratify a treaty of annexation. After a failed attempt to get
                the two-thirds vote in 1893, and two more failed attempts in
                June and September of 1897, McKinley pushed for Joint Resolution
                259 (the Newlands Resolution) and signed it into law on July
                7th, 1898. In truth, a lawful annexation never occurred because
                a Joint Resolution of Congress is a domestic measure, having no
                lawful application or authority beyond U.S. borders. And though
                the document in the hand of the McKinley statue on the campus
                reads “Treaty of Annexation,” it represents a lie. No Treaty of
                Annexation was ever ratified.
              </p>
              <p>
                When Honolulu High School moved to the corner of Beretania and
                Victoria Streets in 1907, the name of the school was changed to
                honor McKinley, an insult to the majority of the people of
                Hawaiʻi. Then, embracing the Department of Education’s 1906
                “Patriotic Program for School Observance--the means for
                inculcating [American] patriotism in the schools,” President
                William McKinley High School then became a principal tool for
                destroying the Hawaiian culture, language, and identity, through
                the indoctrination and thorough Americanization of the youth.
              </p>
              <p>
                To have a high school named after a person so dedicated to the
                eradication of a host culture’s beloved nation would cause great
                pain for any peoples. In addition, to have that person
                immortalized as an eight-ton statue would be a daily reminder of
                the injustices and lies that continue to this day. William
                McKinley is a false hero. His name and statue ignore his
                wrongdoings which set the stage for the decimation of the Native
                people. This is happening in Hawaiʻi, right in the educational
                system that you lead. One of the purposes of education is to
                create perpetual learners and seekers of truth. The high school
                name and statue are contrary to that purpose. If other places
                across the continent can correct a wrong by renaming their
                insensitively named schools and removing their dishonorable
                statues, so can we.
              </p>
              <p>
                To be very clear, this is not, by any means, a slight to the
                students, graduates, and memories of President William McKinley
                High School. A name change and the removal of the statue does
                not diminish the school’s achievements. Neither does it diminish
                its ethos or the interests of the alumni. The accomplishments
                and history will never be erased.
              </p>
              <p>
                I request that you recommend to the Board of Education that the
                name of President William McKinley High School be changed and to
                create a panel of Hawaiian historians to suggest worthy names
                more deserving of this great honor.
              </p>
              <p>
                If you would like to be personally briefed on the historical
                relationship between William McKinley and Hawaiʻi, Dr. Larson
                Ng, an Educational Specialist in the College of Education at the
                University of Hawaiʻi at Mānoa, is readily available to do so.
                Dr. Ng is a 1992 graduate of President William McKinley High
                School. I would be happy to arrange a meeting with him for you.
              </p>
              <p>
                Please do not hesitate to contact me if you have any questions,
                concerns, or thoughts. I appreciate your valued time and
                consideration.
              </p>
            </main>
            <footer className="request-letter-body__footer">
              <p>Mahalo nui,</p>
              <h4 className="signature signature--big">
                <span>Aoloa Patao</span>
                <span>DOE Teacher</span>
              </h4>
              <h6>Co-signed by:</h6>
              <div className="cosignatures">
                <h4 className="signature">
                  <span>Poka Laenui, Esq.</span>
                  <span>
                    Pioneer, Hawaiian Nation Restoration
                    <br />
                    Addressed UN General Assembly, 1993
                  </span>
                </h4>
                <h4 className="signature">
                  <span>Lyla B. Berg, PhD</span>
                  <span>
                    Retired DOE Principal
                    <br />
                    State Representative, 18th District (2004-2010)
                  </span>
                </h4>
                <h4 className="signature">
                  <span>Williamson B. Chang, Esq.</span>
                  <span>
                    Professor, U.H. School of Law
                    <br />
                    Author, “The Annexation Myth”
                  </span>
                </h4>
                <h4 className="signature">
                  <span>Leon Siu</span>
                  <span>
                    Diplomat
                    <br />
                    Hawaiian National
                  </span>
                </h4>
                <h4 className="signature">
                  <span>Dr. Kioni Dudley</span>
                  <span>
                    Retired DOE teacher
                    <br />
                    Co-author A Call for Hawaiian Sovereignty
                  </span>
                </h4>
                <h4 className="signature">
                  <span>D. Piilani Kaopuiki</span>
                  <span>President William McKinley HS ʻ62</span>
                </h4>
              </div>
              <h6>CC Catherine Payne, BOE Chairperson</h6>
            </footer>
          </div>
        </article>

        <div className="request-letter__cta">
          <a
            href="https://sign.moveon.org/petitions/restore-original-name?ref=footer"
            target="_blank"
          >
            Sign The Petition
          </a>
        </div>
      </div>
    );
  }
  toggleExpand() {
    this.setState({
      expanded: true
    });
  }
}

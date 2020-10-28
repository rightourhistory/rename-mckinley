import React from "react";
import "./history-group.scss";
import HonoluluRifles from "../../../images/red-honolulu-rifles.jpg";
import Kalakaua from "../../../images/kalakaua.jpg";
import PearlHarbor from "../../../images/pearl-harbor.jpg";
import PlantationWorkers from "../../../images/plantation-workers.jpg";

export default class HistoryGroup extends React.Component {
  render() {
    return (
      <div className="history-group">
        <div className="history-group__eyebrow">
          <h3>So, where to begin...</h3>
          <h2>The History</h2>
        </div>
        <div className="history-group__year">
          <h3>1887</h3>
        </div>
        <div className="history-group__headline">
          <h4>
            The reigning monarch of Hawaiʻi was forced at <em>gunpoint</em> to
            sign the foreign (American and European) plantation-favoring{" "}
            <em>Bayounet Constitution</em>.
          </h4>
        </div>
        <div className="history-group__body">
          <div className="history-group-text-block history-group-text-block--image-left">
            <div className="history-group-text-block__image">
              <img src={HonoluluRifles} />
              <figure>Honolulu Rifles, controlled by Honolulu League</figure>
            </div>
            <div className="history-group-text-block__text">
              <h6>JULY 6, 1887</h6>
              <p>
                Eight years after the original reciprocity treaty, King David
                Kalakāua is <strong>forced at gunpoint</strong> by the Hawaiian
                League, which consisted of all white men, to sign what is known
                as the Bayonet Constitution.
              </p>
            </div>
          </div>
          <div className="history-group-text-block history-group-text-block--image-right">
            <div className="history-group-text-block__text history-group-text-block__text--large">
              <p>
                This wildly unethical constitution{" "}
                <strong>
                  stripped power from the reigning Hawaiian monarchy
                </strong>
                , ultimately establishing King Kalakāua as a political
                figurehead.
              </p>
              <p>
                It then{" "}
                <strong>
                  disenfranchised the working class and over 2/3 of the native
                  Hawaiian people
                </strong>{" "}
                by stripping their ability to vote. This civic power
                transitioned to sugar plantation-owning American and European
                interests.
              </p>
            </div>
            <div className="history-group-text-block__image">
              <img src={Kalakaua} />
              <figure>King David Kalakāua</figure>
            </div>
          </div>
          <div className="history-group-text-block history-group-text-block--image-left">
            <div className="history-group-text-block__image">
              <img src={PlantationWorkers} />
              <figure>Working-Class Plantation Workers</figure>
            </div>
            <div className="history-group-text-block__text">
              <p>
                It included a monumental clause that gave full control and
                access to Pearl River Lagoon (Pearl Harbor) over to the U.S.{" "}
                <strong>This piqued the Annexation interest</strong>.
              </p>
              <p>
                Regarding losing control of Puʻuloa (Pearl Harbor),
                Liliʻuokalani wrote in her diary,
              </p>
            </div>
          </div>
          <div className="history-group-text-block">
            <div className="history-group-text-block__text history-group-text-block__text--script">
              <p>“A day of infamy in Hawaiian history.”</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

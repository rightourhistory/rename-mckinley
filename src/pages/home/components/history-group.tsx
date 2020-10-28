import React from "react";
import "./history-group.scss";

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
          <p>
            July 6, 1887 &mdash; Eight years after the original reciprocity
            treaty, King David Kalakāua is forced at gunpoint by the Hawaiian
            League, which consisted of all white men, to sign what is known as
            the Bayonet Constitution.
          </p>
          <p>
            {" "}
            Among other debilitating realities, the new constitution granted
            non-Hawaiians (white) voting rights and privileges and it included a
            monumental clause that gave full control and access to Pearl River
            Lagoon (Pearl Harbor) over to the U.S. This piqued the Annexation
            interest.
          </p>
          <p>
            Regarding losing control of Puʻuloa (Pearl Harbor), Liliʻuokalani
            wrote in her diary, “A day of infamy in Hawaiian history.”
          </p>
        </div>
      </div>
    );
  }
}

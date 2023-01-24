import React, { useEffect, useState } from "react";
import styles from "../../styles/Profile.module.css";
import { endorsedElementsModel, summaryTableRows } from "../../models/models";
import PersonalitySummaryTable from "./PersonalitySummaryTable";
import EndorsedElements from "./EndorsedElements";

type RightBarProps = {
  name: string | undefined;
  personalitySummary: summaryTableRows[] | null;
  mostEndorsedElements: endorsedElementsModel[] | undefined;
  profileUrl: string | undefined;
  adjectives: string[] | undefined;
};

function RightBar(props: RightBarProps) {
  const [adjectivePara, setAdjectivePara] = useState<string>("");

  useEffect(() => {
    if (props.adjectives) {
      let string = "";
      for (let i = 0; i < props.adjectives?.length; i++) {
        if (i !== props.adjectives.length - 1) {
          string += `${props.adjectives[i]}, `;
        } else {
          string += props.adjectives[i];
        }
      }
      setAdjectivePara(string);
    }
  }, [props.adjectives]);

  return (
    <div className={styles.rightBarMain}>
      <h1 className={styles.rightBarName}>{props.name}</h1>
      <p className={styles.rightBarURL}>{props.profileUrl}</p>
      <PersonalitySummaryTable personalitySummary={props.personalitySummary} />
      <div>
        <h3 className={styles.endorsedHeader}>Most Endorsed Elements</h3>
        <div className={styles.endorsedMain}>
          {props.mostEndorsedElements?.map((element, index) => {
            return (
              <EndorsedElements
                key={element.name}
                name={element.name}
                score={element.score}
                colorHexCodes={element.colorHexCodes}
              />
            );
          })}
        </div>
      </div>
      <h3 className={styles.endorsedHeader}>Adjectives</h3>
      <div className={styles.adjectiveDiv}>
        <p className={styles.adjectiveName}>{adjectivePara}</p>
      </div>
    </div>
  );
}

export default RightBar;

import React from "react";
import { summaryTableRows } from "../../models/models";
import styles from "../../styles/Profile.module.css";

type PersonalitySummaryTableProps = {
  personalitySummary: summaryTableRows[] | null;
};

function PersonalitySummaryTable(props: PersonalitySummaryTableProps) {
  return (
    <div className={styles.summaryTableMain}>
      <p className={styles.summaryTableHeader}>Personality Summary</p>
      {props.personalitySummary?.map((summary) => {
        return (
          <div className={styles.rowMain} key={summary.title}>
            <p className={styles.rowTitle}>{summary.title}</p>
            <div className={styles.valueDiv}>
              {summary.values.map((value, index) => {
                return (
                  <p
                    key={index}
                    className={
                      value.isHighlighted === true
                        ? styles.highlighted
                        : styles.unHighlighted
                    }
                  >
                    {index === summary.values.length - 1
                      ? value.text
                      : value.text + "/"}
                  </p>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PersonalitySummaryTable;

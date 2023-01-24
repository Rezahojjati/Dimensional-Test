import React, { useEffect, useState } from "react";
import styles from "../../styles/Navbar.module.css";

type NameAndProgressBarProps = {
  name: string;
  score: number;
};

function NameAndProgressBar(props: NameAndProgressBarProps) {
  return (
    <div className={styles.NameAndProgressBarMain}>
      <p>{props.name}</p>
      <div className={styles.progressBarParent}>
        <div
          style={{ width: `${props.score * 100}%` }}
          className={styles.progressBarChild}
        ></div>
      </div>
    </div>
  );
}

export default NameAndProgressBar;

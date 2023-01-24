import React from "react";
import { Traits } from "../../models/models";
import styles from "../../styles/Navbar.module.css";
import Element from "./Element";
import NameAndProgressBar from "./NameAndProgressBar";

function TraitSearchResult(props: Traits) {
  return (
    <div className={styles.traitsMainDiv}>
      <Element color={props.colorHexCodes[0]} />
      <NameAndProgressBar name={props.name} score={props.score} />
      <p>{(props.score * 100).toFixed(0)}</p>
    </div>
  );
}

export default TraitSearchResult;

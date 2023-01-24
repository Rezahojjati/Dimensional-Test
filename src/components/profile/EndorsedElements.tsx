import React from "react";
import { endorsedElementsModel } from "../../models/models";
import styles from "../../styles/Profile.module.css";
import EndorsedCircle from "./EndorsedCircle";

function EndorsedElements(props: endorsedElementsModel) {
  return (
    <div className={styles.endorsedDiv}>
      <EndorsedCircle color={props.colorHexCodes[0]} />
      <p className={styles.endorsedName}>{props.name}</p>
    </div>
  );
}

export default EndorsedElements;

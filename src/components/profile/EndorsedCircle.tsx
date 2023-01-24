import React from "react";
import styles from "../../styles/Profile.module.css";

type EndorsedCircleProps = {
  color: string;
};

function EndorsedCircle(props: EndorsedCircleProps) {
  return (
    <div
      className={styles.endorsedCircle}
      style={{
        background: `${props.color}`,
      }}
    ></div>
  );
}

export default EndorsedCircle;

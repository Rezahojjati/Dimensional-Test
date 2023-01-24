import React from "react";
import styles from "../../styles/Profile.module.css";

type CircleProps = {
  color: string;
};

function ProfileCircle(props: CircleProps) {
  return (
    <div
      className={styles.profileCircle}
      style={{
        background: `${props.color}`,
      }}
    ></div>
  );
}

export default ProfileCircle;

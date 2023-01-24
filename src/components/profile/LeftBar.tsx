import React from "react";
import ProfileCircle from "./ProfileCircle";
import styles from "../../styles/Profile.module.css";

type LeftBarProps = {
  name: string | undefined;
  description: string | undefined;
  profileUrl: string | undefined;
};

function LeftBar(props: LeftBarProps) {
  return (
    <div className={styles.leftBarMain}>
      <ProfileCircle color={`linear-gradient(#e66465, #9198e5)`} />
      <h1 className={styles.leftBarName}>{props.name}</h1>
      <p className={styles.leftBarURL}>{props.profileUrl}</p>
      <p className={styles.leftBarDescription}>{props.description}</p>
    </div>
  );
}

export default LeftBar;

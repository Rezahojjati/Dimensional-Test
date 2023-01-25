import React, { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../api/hooks/useFetch";
import Navbar from "../components/navbar/Navbar";
import LeftBar from "../components/profile/LeftBar";
import RightBar from "../components/profile/RightBar";
import { summaryTableRows, userProfileModel } from "../models/models";
import styles from "../styles/Profile.module.css";

function UserProfilePage(props: any) {
  const [userData, setUserData] = useState<userProfileModel | null>(null);
  const [personalitySummaries, setPersonalitySummaries] = useState<
    summaryTableRows[] | null
  >(null);
  const location = useLocation();

  const peronalSummariesResult = useFetch({
    url: `https://us-central1-dimensional-test-9f5ab.cloudfunctions.net/app/personalitySummaries/${location.state.id}`,
  });

  useMemo(() => {
    setUserData(location.state);
    if (peronalSummariesResult.result) {
      setPersonalitySummaries(
        peronalSummariesResult.result["summaryTableRows"]
      );
    }
  }, [location.state, peronalSummariesResult.result]);

  return (
    <div className={styles.profileParent}>
      <Navbar />
      <div className={styles.profileMain}>
        <LeftBar
          name={userData?.userName}
          description={userData?.description}
          profileUrl={userData?.profileUrl}
        />
        <RightBar
          name={userData?.userName}
          personalitySummary={personalitySummaries}
          mostEndorsedElements={userData?.mostEndorsedElements}
          profileUrl={userData?.profileUrl}
          adjectives={userData?.adjectives}
        />
      </div>
    </div>
  );
}

export default UserProfilePage;

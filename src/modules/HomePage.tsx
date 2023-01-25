import React, { useEffect } from "react";
import useFetch from "../api/hooks/useFetch";
import { fetchResults, userProfileModel } from "../models/models";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const fetchResults: fetchResults = useFetch({
    url: "https://us-central1-dimensional-test-9f5ab.cloudfunctions.net/app/profiles",
  });

  useEffect(() => {
    if (fetchResults.result) {
      const profileResults: userProfileModel = fetchResults.result[0];
      navigate(`/profile/${profileResults.id}`, { state: profileResults });
    }
  }, [fetchResults, navigate]);

  return (
    <div>
      <h1>User Not Found</h1>
    </div>
  );
}

export default HomePage;

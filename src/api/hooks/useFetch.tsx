import React, { useState, useEffect } from "react";
import axios from "axios";

type FetchProps = {
  url: string;
};

function useFetch(props: FetchProps) {
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<boolean>(false);
  const [errorResponse, setErrorResponse] = useState<any>(null);

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(props.url, {
        signal: controller.signal,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setResults(response.data);
      })
      .catch((err) => {
        setError(true);
        setErrorResponse(err);
      });
    return () => controller?.abort();
  }, []);

  return { result: results, error: error, errorResponse: errorResponse };
}

export default useFetch;

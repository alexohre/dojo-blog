import { useState, useEffect } from "react";

function useFetch(URL) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw Error("Unable to fetch the data from the server...");
        }
        // console.log(response);
        return response.json();
      })
      .then((data) => {
        setError(null);
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
        console.log(error.message);
      });
  }, [URL]);
  return { data, isLoading, error };
}

export default useFetch;

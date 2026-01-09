//A custom hook to fetch data from the API

import { useState, useEffect } from "react";

function useFetch(URL) {
  const [data, setData] = useState([]); // Set state for data from API
  const [loading, setLoading] = useState(true); // Set loading status of data
  const [error, setError] = useState(null); // Set error if API fetch throws error

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(`HTTP error! Status:${response.status}`);
        }

        const result = await response.json();
        setData(result.products);
      } catch (err) {
        setError(`Failed to fetch the products ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [URL]); // In case of URL change, data is refetched

  return { data, loading, error };
}

export default useFetch;

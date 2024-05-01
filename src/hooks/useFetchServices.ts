// hooks/useFetchServices.js
import { useState, useEffect } from "react";

function useFetchServices(url: string) {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      setServices(data);
      setLoading(false);
    }
    fetchData();
  }, [url]);

  return { services, loading };
}

export default useFetchServices;

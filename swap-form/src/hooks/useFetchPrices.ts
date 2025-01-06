import { useState, useEffect } from "react";

const useFetchPrices = (url: string) => {
  const [prices, setPrices] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPrices(data);
      } catch (error) {
        console.error("Failed to fetch prices", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();
  }, [url]);

  return { prices, loading };
};

export default useFetchPrices;

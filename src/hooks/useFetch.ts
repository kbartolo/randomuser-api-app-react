import { useEffect, useState } from "react";
const useFetch = <T>(url: string, mapper: (result: T) => T[]) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [result, setResult] = useState<T[] | undefined>();
  const [error, setError] = useState<string>("");
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (mapper) {
          const formattedData = mapper(data?.results);
          setResult(formattedData);
        } else {
          setResult(data?.results);
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
      setLoading(false);
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loading,
    result,
    error,
  };
};

export default useFetch;

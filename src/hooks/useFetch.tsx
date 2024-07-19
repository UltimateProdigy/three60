import axios, { AxiosError, AxiosResponse, AxiosRequestHeaders } from "axios";
import { useState, useEffect } from "react";

type RequestMethod = 'GET' | 'POST';

interface FetchOptions {
  method: RequestMethod;
  headers?: AxiosRequestHeaders;
  body?: any;
}

function useFetch<T>(url: string, options: FetchOptions) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response: AxiosResponse<T>;

        if (options.method === 'GET') {
          response = await axios.get(url, {
            headers: options.headers,
          });
        } else if (options.method === 'POST') {
          response = await axios.post(url, options.body, {
            headers: options.headers,
          });
        } else {
          throw new Error("Unsupported request method");
        }

        setData(response.data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err);
        } else {
          setError(new Error("An unexpected error occurred") as AxiosError);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, options]);

  return { data, loading, error };
}

export default useFetch;

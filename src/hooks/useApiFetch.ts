import axios from "axios";
import React, { useEffect, useMemo } from "react";
import { useState } from "react";

const useApiFetch = (url: string, value: string, trigerApi: boolean) => {
  const [data, setData] = useState<any>("");
  const [error, setError] = useState<any>({ type: 0, message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const featchDataFromApi = async () => {
    console.log("hi");
    try {
      setIsLoading(true);
      const responce = await axios.get(url + value);
      console.log(responce?.data);
      if (responce) {
        setData(responce.data);
      } else {
        setError({ type: 200, message: "pleace provide valid information" });
      }
    } catch (e: any) {
      console.log(JSON.stringify(e));
      setError({ type: 400, message: JSON.stringify(e.message) });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (url && value) {
      featchDataFromApi();
    }
  }, [trigerApi]);
  return { data, error, isLoading };
};

export default useApiFetch;

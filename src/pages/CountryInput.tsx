import React, { FormEvent, useEffect, useState } from "react";
import styles from "./CountryInput.module.css";
import useApiFetch from "../hooks/useApiFetch";
import { type } from "os";
import { useNavigate } from "react-router-dom";

const CountryInput = () => {
  const navigate = useNavigate();
  const url = "https://restcountries.com/v3.1/name/";
  const [countryName, setCountryName] = useState("");
  const [trigerApi, setTrigerApi] = useState(false);
  const { data, error, isLoading } = useApiFetch(url, countryName, trigerApi);

  const handleOnFormSubmit = (e: any) => {
    e.preventDefault();
    setTrigerApi((prev) => !prev);
    // console.log("sooraj");
  };
  useEffect(() => {
    if (data) {
      navigate("countryDeatils", { state: data[0] });
    }
  }, [data]);

  if (error.type != 0) {
    return (
      <div>
        {error.message}
        <div>
          <button onClick={() => window.location.reload()}>Reload</button>
        </div>
      </div>
    );
  }

  return (
    <form className={styles.container} onSubmit={handleOnFormSubmit}>
      <input
        required
        type="text"
        placeholder="Enter country name "
        onChange={(e) => setCountryName(e.target.value)}
      ></input>
      <button type="submit">{isLoading ? "Loadding..." : "Submit"}</button>
    </form>
  );
};

export default CountryInput;

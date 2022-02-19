import { stringify } from "querystring";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import useApiFetch from "../hooks/useApiFetch";

const CountryDetails = () => {
  const localState: any = useLocation().state;

  const [hideWeather, setHideWeather] = useState(false);
  console.log(localState);

  const url = "";
  const [trigerApi, setTrigerApi] = useState(false);
  const [capital, setCapital] = useState("");
  const { isLoading, data, error } = useApiFetch(url, capital, trigerApi);

  const showWeather = () => {
    setHideWeather((prev) => !prev);
    setCapital(localState?.capital);
  };

  //imp
  if (!localState) {
    return <div>No Data Found</div>;
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",

        alignItems: "center",
      }}
      className="countryDetails"
    >
      <div>
        <span>Country Name</span>:<span>{localState?.name?.common}</span>
      </div>
      <div>
        <span>Capital</span>:<span>{localState?.capital}</span>
      </div>
      <div>
        <span>Population</span>:<span>{localState?.population}</span>
      </div>
      <div>
        <span>Latitude</span>:<span>{localState?.latlng[0]}</span>
      </div>
      <div>
        <span>Longitude</span>:<span>{localState?.latlng[1]}</span>
      </div>
      <div>
        <img src={localState?.flags?.png} alt="flag"></img>
      </div>
      <div>
        <button onClick={showWeather}>Weather-Details</button>
      </div>
      {hideWeather && data && <WeatherDetails />}
    </div>
  );
};

export default CountryDetails;

const WeatherDetails = () => {
  return <div>sad</div>;
};

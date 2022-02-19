import { stringify } from "querystring";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import useApiFetch from "../hooks/useApiFetch";

const CountryDetails = () => {
  const localState: any = useLocation().state;

  const [hideWeather, setHideWeather] = useState(false);

  const url =
    "http://api.weatherstack.com/current?access_key=6434656c6d97f03d4ede6dd171ec4c36&query=";
  const [trigerApi, setTrigerApi] = useState(false);
  const [capital, setCapital] = useState("");
  const { isLoading, data, error } = useApiFetch(url, capital, trigerApi);

  const showWeather = () => {
    if (!data) {
      setTrigerApi((prev) => !prev);
    }
    setHideWeather((prev) => !prev);
    setCapital(localState?.capital);
  };

  // http://api.weatherstack.com/current?access_key=6434656c6d97f03d4ede6dd171ec4c36&query=
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
        <button onClick={showWeather}>
          {isLoading ? "Loadding" : "Weather-Details"}
        </button>
      </div>
      {hideWeather && data && <WeatherDetails data={data} />}
    </div>
  );
};

export default CountryDetails;

const WeatherDetails = ({ data }: any) => {
  const {
    current: { weather_icons, weather_descriptions, wind_speed, temperature },
  } = data;

  return (
    <div className="conatinerWeather">
      <div>
        <span>WindSpeed</span>:<span>{wind_speed} </span>
      </div>
      <div>
        <span>Temprature</span>:<span>{temperature}</span>
      </div>
      <div className="icon">
        <span>weather_descriptions</span>:<span>{weather_descriptions[0]}</span>
        <img src={weather_icons[0]} alt="" />
      </div>
    </div>
  );
};

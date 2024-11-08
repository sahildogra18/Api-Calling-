import { createContext, useContext, useState } from "react";
import { getWeatherDataForCity } from "../context";

let WeatherContext = createContext(null);

export let useWeather = () => {
  return useContext(WeatherContext);
};

export let WeatherProvider = (props) => {
  let [data, setData] = useState(null);
  let [searchCity, setSearchCity] = useState(null);

  let fetchData = async () => {
    let response = await getWeatherDataForCity(searchCity);
    setData(response);
  };
  return (
    <WeatherContext.Provider
      value={{ searchCity, data, setSearchCity, fetchData }}
    >
      {props.childern}
    </WeatherContext.Provider>
  );
};

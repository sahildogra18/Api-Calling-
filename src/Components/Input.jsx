import React from "react";
import { useWeather } from "../context/Weather";
let weather = useWeather();
console.log(weather);
function Input() {
  return (
    <input
      type="text"
      value={WeatherProvider.searchCity}
      onChange={(e) => weather.setSearchCity(e.target.value)}
    />
  );
}

export default Input;

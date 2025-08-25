import React, { useState } from "react";
import Button from "./Button";
import { useweather } from "../context/weather";

const SearchBox = () => {
  const [city, setCity] = useState("");
  const weather = useweather();

  const handleSearch = () => {
    if (city.trim() !== "") {
      weather.fetchWeather(city); // your context API call
    }
  };

  return (
    <div>
      <input
        className="input-field"
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch(); // 👈 Pressing Enter = same as clicking Button
          }
        }}
      />
      <Button value="Search" onClick={handleSearch} />
    </div>
  );
};

export default SearchBox;

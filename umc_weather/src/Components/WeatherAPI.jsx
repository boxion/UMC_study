import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const WeatherBox = styled.div`
  text-align: center;
`;

const InputContainer = styled.input`
  width: 100%;
  height: 5vw;
  border: 0.3vw solid black;
  border-radius: 2vw;
  box-sizing: border-box;
  padding-left: 2vw;
`;

const WeatherContainer = styled.div`
  width: 100%;
  border: 0.3vw solid black;
  border-radius: 1.5vw;
  box-sizing: border-box;
  margin-top: 3vw;
  padding: 0 2vw;
  text-align: left;
`;

const WeatherAPI = () => {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error] = useState(null);

  const API_KEY = '48c2b670a0364c9aaffab7893bdfb212';

  const searchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };
 
  return (
    <WeatherBox>
      <InputContainer
        type="text"
        placeholder="도시를 입력하세요"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && searchWeather()}
      />
      {weatherData && (
        <WeatherContainer>
          <h3>{weatherData.name}</h3>
          <h1>{`${((weatherData.main.temp - 273.15) * 10) / 10}ºC`}</h1>
          <h5 style={{ textAlign: "right" }}>
            {weatherData.weather[0].description}
          </h5>
        </WeatherContainer>
      )}
      {error && <p>{error}</p>}
    </WeatherBox>
  );
};

export default WeatherAPI;

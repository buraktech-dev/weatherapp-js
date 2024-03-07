import { useState } from "react";

import "./App.css";
import {
  WiDaySunnyOvercast,
  WiStrongWind,
  WiHumidity,
  WiThermometerExterior,
  WiFog,
} from "react-icons/wi";
import { FiCalendar, FiMapPin, FiSearch } from "react-icons/fi";

function App() {
  const [location, setLocation] = useState("");
  const [locationData, setLocationData] = useState({});
  const [weatherData, setWeatherData] = useState({});
  const API_KEY = "";

  const weatherIcons = {
    "01d": "https://openweathermap.org/img/wn/01d@2x.png",
    "02d": "https://openweathermap.org/img/wn/02d@2x.png",
    "03d": "https://openweathermap.org/img/wn/03d@2x.png",
    "04d": "https://openweathermap.org/img/wn/04d@2x.png",
    "09d": "https://openweathermap.org/img/wn/09d@2x.png",
    "10d": "https://openweathermap.org/img/wn/10d@2x.png",
    "11d": "https://openweathermap.org/img/wn/11d@2x.png",
    "13d": "https://openweathermap.org/img/wn/13d@2x.png",
    "50d": "https://openweathermap.org/img/wn/50d@2x.png",
    "01n": "https://openweathermap.org/img/wn/01n@2x.png",
    "02n": "https://openweathermap.org/img/wn/02n@2x.png",
    "03n": "https://openweathermap.org/img/wn/03n@2x.png",
    "04n": "https://openweathermap.org/img/wn/04n@2x.png",
    "09n": "https://openweathermap.org/img/wn/09n@2x.png",
    "10n": "https://openweathermap.org/img/wn/10n@2x.png",
    "11n": "https://openweathermap.org/img/wn/11n@2x.png",
    "13n": "https://openweathermap.org/img/wn/13n@2x.png",
    "50n": "https://openweathermap.org/img/wn/50n@2x.png",
  };

  const getLocationCoords = async () => {
    try {
      const coordResponse = await fetch(
        "http://api.openweathermap.org/geo/1.0/direct?q=" +
          location +
          "&limit=1&appid=" +
          API_KEY
      );

      if (coordResponse.ok) {
        const jsonCoords = await coordResponse.json();
        setLocationData({
          country: jsonCoords[0].country,
          lat: jsonCoords[0].lat,
          name: jsonCoords[0].name,
          lon: jsonCoords[0].lon,
          state: jsonCoords[0].state,
        });
      }

      const weatherResponse = await fetch(
        "http://api.openweathermap.org/data/2.5/weather?lat=" +
          locationData.lat +
          "&lon=" +
          locationData.lon +
          "&units=metric" +
          "&appid=" +
          API_KEY
      );

      if (weatherResponse.ok) {
        const jsonWeatherData = await weatherResponse.json();
        console.log(jsonWeatherData.main.temp);
        setWeatherData({
          temp: Math.round(jsonWeatherData.main.temp),
          feelslike: Math.round(jsonWeatherData.main.feels_like),
          tempmin: jsonWeatherData.main.temp_min,
          tempmax: jsonWeatherData.main.temp_max,
          pressure: jsonWeatherData.main.pressure,
          humidity: jsonWeatherData.main.humidity,
          visibility: jsonWeatherData.visibility,
          windspeed: jsonWeatherData.wind.speed,
          description: jsonWeatherData.weather[0].main,
          icon: jsonWeatherData.weather[0].icon,
          sunrise: jsonWeatherData.sys.sunrise,
          sunset: jsonWeatherData.sys.sunset,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = () => {
    getLocationCoords();
    getWeatherDetails();
  };

  const handleLocation = (event) => {
    event.preventDefault();
    setLocation(event.target.value);
  };

  return (
    <div className="flex flex-col gap-5 justify-center">
      <div className="flex flex-row items-center justify-center gap-3">
        <input
          name="location"
          value={location}
          onChange={handleLocation}
          className="h-10 rounded-3xl bg-slate-500 p-5 w-full"
          placeholder="Search..."
        ></input>
        <button
          className="rounded-3xl h-10 bg-teal-500"
          onClick={() => handleSearch()}
        >
          <FiSearch />
        </button>
      </div>
      <div className="flex flex-row gap-5">
        <div className="bg-slate-500 rounded-3xl p-7 text-left w-80">
          <p className="text-left">Current Weather</p>
          <div className="divide-y divide-solid">
            <div className="mt-3">
              <div className="flex items-center justify-between">
                <p className="text-7xl">{weatherData.temp + "°C"}</p>
                <img
                  className="mt-4 h-28"
                  src={weatherIcons[weatherData.icon]}
                ></img>
              </div>
              <p className="text-left">{weatherData.description}</p>
            </div>
            <div className="mt-5">
              <div className="flex items-center gap-3 mt-5">
                <FiCalendar className="text-xl" />
                <p>Tuesday - Mar 3, 2024</p>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <FiMapPin className="text-xl" />
                <p>
                  {locationData.name
                    ? locationData.name + ", " + locationData.country
                    : ""}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-500 rounded-3xl p-7 w-[50rem]">
          <p className="text-left">Details</p>
          <div className="flex-col">
            <div className="flex gap-5 mt-5">
              <div className="bg-main-color rounded-3xl w-full p-5">
                <p className="text-left">Feels Like</p>
                <div className="flex items-center justify-between mt-4">
                  <WiThermometerExterior className="text-2xl mt-1" />
                  <p className="text-2xl">{weatherData.feelslike + "°C"}</p>
                </div>
              </div>
              <div className="bg-main-color rounded-3xl w-full p-5">
                <p className="text-left">Humidity</p>
                <div className="flex items-center justify-between mt-4">
                  <WiHumidity className="text-2xl mt-1" />
                  <p className="text-2xl">{weatherData.humidity + "%"}</p>
                </div>
              </div>
              <div className="bg-main-color rounded-3xl w-full p-5">
                <p className="text-left">Wind Speed</p>
                <div className="flex items-center justify-between mt-4">
                  <WiStrongWind className="text-2xl mt-1" />
                  <p className="text-2xl">{weatherData.windspeed + "m/s"}</p>
                </div>
              </div>
              <div className="bg-main-color rounded-3xl w-full p-5">
                <p className="text-left">Visibility</p>
                <div className="flex items-center justify-between mt-4">
                  <WiFog className="text-2xl mt-1" />
                  <p className="text-2xl">
                    {weatherData.visibility / 1000 + "km"}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-5 mt-5">
              <div className="bg-main-color rounded-3xl w-full p-5">
                <p className="text-left">Feels Like</p>
                <div className="flex items-center justify-between mt-4">
                  <WiThermometerExterior className="text-3xl mt-1" />
                  <p className="text-3xl">23C</p>
                </div>
              </div>
              <div className="bg-main-color rounded-3xl w-full p-5">
                <p className="text-left">Humidity</p>
                <div className="flex items-center justify-between mt-4">
                  <WiHumidity className="text-3xl mt-1" />
                  <p className="text-3xl">23C</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-500 rounded-3xl p-7 w-full">
        <p className="text-left">5 Day Weather Forecast</p>
        <div className="flex-col">
          <div className="flex gap-5 mt-5">
            <div className="bg-main-color rounded-3xl w-full p-5">
              <p className="text-left">Wednesday - Mar 4</p>
              <div className="flex items-center justify-between mt-4">
                <WiDaySunnyOvercast className="text-5xl mt-2" />
                <p className="text-4xl">23C</p>
              </div>
            </div>
            <div className="bg-main-color rounded-3xl w-full p-5">
              <p className="text-left">Thursday - Mar 5</p>
              <div className="flex items-center justify-between mt-4">
                <WiDaySunnyOvercast className="text-5xl mt-2" />
                <p className="text-4xl">23C</p>
              </div>
            </div>
            <div className="bg-main-color rounded-3xl w-full p-5">
              <p className="text-left">Friday - Mar 7</p>
              <div className="flex items-center justify-between mt-4">
                <WiDaySunnyOvercast className="text-5xl mt-2" />
                <p className="text-4xl">23C</p>
              </div>
            </div>
            <div className="bg-main-color rounded-3xl w-full p-5">
              <p className="text-left">Saturday - Mar 8</p>
              <div className="flex items-center justify-between mt-4">
                <WiDaySunnyOvercast className="text-5xl mt-2" />
                <p className="text-4xl">23C</p>
              </div>
            </div>
            <div className="bg-main-color rounded-3xl w-full p-5">
              <p className="text-left">Sunday - Mar 9</p>
              <div className="flex items-center justify-between mt-4">
                <WiDaySunnyOvercast className="text-5xl mt-2" />
                <p className="text-4xl">23C</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

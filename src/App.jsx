import { useState } from "react";

import "./App.css";
import {
  WiDaySunny,
  WiDaySunnyOvercast,
  WiDayCloudy,
  WiCloud,
  WiDayShowers,
  WiDayRain,
  WiDayLightning,
  WiDaySnow,
  WiDayFog,
  WiStrongWind,
  WiHumidity,
  WiThermometerExterior,
  WiFog,
} from "react-icons/wi";
import { FiCalendar, FiMapPin, FiSearch } from "react-icons/fi";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col gap-5 justify-center">
      <div className="flex flex-row items-center justify-center gap-3">
        <input
          className="h-10 rounded-3xl bg-slate-500 p-5 w-full"
          placeholder="Search..."
        ></input>
        <button className="rounded-3xl h-10 bg-teal-500">
          <FiSearch />
        </button>
      </div>
      <div className="flex flex-row gap-5">
        <div className="bg-slate-500 rounded-3xl p-7 text-left w-80">
          <p className="text-left">Current Weather</p>
          <div className="divide-y divide-solid">
            <div className="mt-3">
              <div className="flex items-center justify-between">
                <p className="text-7xl">23C</p>
                <WiDaySunnyOvercast className="text-8xl mt-4" />
              </div>
              <p className="text-left">Cloudy</p>
            </div>
            <div className="mt-5">
              <div className="flex items-center gap-3 mt-5">
                <FiCalendar className="text-xl" />
                <p>Tuesday - Mar 3, 2024</p>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <FiMapPin className="text-xl" />
                <p>Vienna, Austria</p>
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
              <div className="bg-main-color rounded-3xl w-full p-5">
                <p className="text-left">Wind Speed</p>
                <div className="flex items-center justify-between mt-4">
                  <WiStrongWind className="text-3xl mt-1" />
                  <p className="text-3xl">23C</p>
                </div>
              </div>
              <div className="bg-main-color rounded-3xl w-full p-5">
                <p className="text-left">Visibility</p>
                <div className="flex items-center justify-between mt-4">
                  <WiFog className="text-3xl mt-1" />
                  <p className="text-3xl">23C</p>
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

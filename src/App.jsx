import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="card">
        <div className="search-item">
          <input placeholder="Search for a city" className="searchbar"></input>
          <button className="searchbutton">Search</button>
        </div>
        <div className="main-item">
          <h1 className="degree">24</h1>
          <h1 className="text">Istanbul</h1>
        </div>
        <div className="side-item"></div>
      </div>
    </div>
  );
}

export default App;

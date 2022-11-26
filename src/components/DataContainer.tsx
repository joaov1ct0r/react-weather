import React, { useContext } from "react";
import IFormContextType from "../interfaces/IFormContextType";
import { FormContext } from "./FormContext";

function DataContainer(): JSX.Element {
  const { ApiData } = useContext(FormContext) as IFormContextType;

  if (ApiData === null) {
    return (
      <label className="fragment-div">
        <div></div>
      </label>
    );
  } else {
    return (
      <label className="data">
        <div className="data-container" data-testid="data-div">
          <h2>
            {ApiData?.name} - {ApiData?.sys.country}
          </h2>
          <img
            src={`../components/src/public/assets/icons/${ApiData?.weather[0].icon}.png`}
            alt="weather-icon"
          ></img>
          <h3>Temperatura: {(ApiData?.main.temp - 273.15).toFixed()}°C</h3>
          <h3>
            {(ApiData?.main.temp_min - 273.15).toFixed()} |{" "}
            {(ApiData?.main.temp_max - 273.15).toFixed()}
          </h3>
          <h3>{ApiData?.weather[0].main}</h3>
          <h4>{ApiData?.weather[0].description}</h4>
        </div>
      </label>
    );
  }
}

export default DataContainer;

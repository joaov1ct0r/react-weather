import React, { useState } from "react";
import "./styles/App.css";
import IApiData from "./interfaces/IApiData";
import FormContainer from "./components/FormContainer.";
import DataContainer from "./components/DataContainer";

function App() {
  const [City, setCity] = useState<string>("");

  const [ApiData, setApiData] = useState<IApiData | null>(null);

  function handleCity(event: React.ChangeEvent<HTMLInputElement>): void {
    setCity(event.target.value);
  }

  async function handleSearch(): Promise<void> {
    try {
      const URL = `${process.env.REACT_APP_API_URL}?q=${City}&appid=${process.env.REACT_APP_API_KEY}`;

      const request: Response = await fetch(URL);

      const response: IApiData = await request.json();

      setApiData(response);
    } catch (error: unknown) {
      console.log(error);
    }
  }
  return (
    <div className="App">
      <h1>Weather App</h1>
      <FormContainer handleCity={handleCity} handleSearch={handleSearch} />
      {ApiData === null ? <></> : <DataContainer ApiData={ApiData} />}
    </div>
  );
}

export default App;

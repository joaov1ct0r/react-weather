import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './App.css';
import IApiData from './interfaces/IApiData';

function App() {
  let [City, setCity] = useState<string>('');

    let [ApiData, setApiData] = useState<IApiData | null>(null);

    function handleCity(event: React.ChangeEvent<HTMLInputElement>): void {
        setCity(event.target.value);
    }

    async function handleSearch(): Promise<void> {
        try {
            const URL: string = `${process.env.API_URL}?q=${City}&appid=${process.env.API_KEY}`;

            const request: Response = await fetch(URL);

            const response = await request.json();

            const data: IApiData = response.body;

            setApiData(data);
        } catch (error: any){
            throw new Error(error);
        }
    }
    return (
        <div className="App">
          <h1>Weather App</h1>
          <div className="form-container">
              <input
                onChange={handleCity}
                type="text"
                placeholder="Localização"
                name="inputCity"
              />
              <button onClick={handleSearch} type="submit">
                <FiSearch size={20} color="#FFF"></FiSearch>
              </button>
          </div>
          { ApiData === null ? <></> :
          <div className="data-container">
            <h2>
                {ApiData.name} - {ApiData.sys.country}
            </h2>
            <img
                src={require(`../assets/icons/${ApiData.weather[0].icon}.png`)}
                alt="weather-icon"
            ></img>
            <h3>
                Temperatura: {(ApiData.main.temp - 273.15).toFixed()}°C
            </h3>
            <h3>
                {(ApiData.main.temp_min - 273.15).toFixed()} |{' '}
                {(ApiData.main.temp_max - 273.15).toFixed()}
            </h3>
            <h3>{ApiData.weather[0].main}</h3>
            <h4>{ApiData.weather[0].description}</h4>
          </div>
          }
        </div>
    );
}

export default App;

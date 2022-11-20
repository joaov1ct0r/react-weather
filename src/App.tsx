import { useState } from 'react';
import './App.css';
import IApiData from './interfaces/IApiData';
import FormContainer from './components/FormContainer.';

function App() {
    let [City, setCity] = useState<string>('');

    let [ApiData, setApiData] = useState<IApiData | null>(null);

    function handleCity(event: React.ChangeEvent<HTMLInputElement>): void {
        setCity(event.target.value);
    }

    async function handleSearch(): Promise<void> {
        try {
            const URL: string = `${process.env.REACT_APP_API_URL}?q=${City}&appid=${process.env.REACT_APP_API_KEY}`;

            const request: Response = await fetch(URL);

            const response: IApiData = await request.json();

            setApiData(response);
        } catch (error: any){
           console.log(error)
        }
    }
    return (
        <div className="App">
          <h1>Weather App</h1>
          <FormContainer handleCity={handleCity} handleSearch={handleSearch} />
          { ApiData === null ? <></> :
          <div className="data-container">
            <h2>
                {ApiData.name} - {ApiData.sys.country}
            </h2>
            <img
                src={require(`./assets/icons/${ApiData.weather[0].icon}.png`)}
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

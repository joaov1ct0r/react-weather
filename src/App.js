import './App.css';

import { useState } from 'react';

function App() {
    let [City, setCity] = useState('');

    let [ApiData, setApiData] = useState({});

    function handleCity(event) {
        setCity(event.target.value);
    }

    function handleSearch() {
        const API_KEY = '11793562357b04c38a206416e8384ea1';

        const URL = `http://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${API_KEY}`;

        fetch(URL)
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                setApiData(data);
            });
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
                    Pesquisar
                </button>
                {Object.keys(ApiData).length > 0 && (
                    <div className="data-container">
                        <img
                            src="./assets/${ApiData.weather[0].icon}"
                            alt="weather-icon"
                        ></img>
                        <p>
                            Local: {ApiData.name} - {ApiData.sys.country}
                        </p>
                        <p>{ApiData.weather[0].main}</p>
                        <p>Descrição: {ApiData.weather[0].description}</p>
                        <p>Temperatura: {ApiData.main.temp}</p>
                        <p>Temperatura maxima: {ApiData.main.temp_max}</p>
                        <p>Temperatura minima: {ApiData.main.temp_min}</p>
                        <p>Sensação termica: {ApiData.main.feels_like}</p>
                        <p>Humidade: {ApiData.main.humidity}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;

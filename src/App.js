import './App.css';

import { FiSearch } from 'react-icons/fi';

import { useState } from 'react';

import DataContainer from './components/DataContainer';

function App() {
    let [City, setCity] = useState('');

    let [ApiData, setApiData] = useState({});

    function handleCity(event) {
        setCity(event.target.value);
    }

    function handleSearch() {
        try {
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
        } catch {
            alert('Houve algum erro!');
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
                {Object.keys(ApiData).length > 0 && (
                    <DataContainer ApiData={ApiData}></DataContainer>
                )}
            </div>
        </div>
    );
}

export default App;

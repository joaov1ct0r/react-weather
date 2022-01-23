import './App.css';

import { useState } from 'react';

function App() {
    let [City, setCity] = useState('');

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
                <div className="data-container"></div>
            </div>
        </div>
    );
}

export default App;

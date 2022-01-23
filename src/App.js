import './App.css';

import { useState } from 'react';

function App() {
    let [City, setCity] = useState('');

    function handleCity(event) {
        setCity(event.target.value);
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
                <button type="submit">Pesquisar</button>
            </div>
        </div>
    );
}

export default App;

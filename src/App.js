import './App.css';

import { useState } from 'react';

function App() {
    let [City, setCity] = useState('');
    return (
        <div className="App">
            <h1>Weather App</h1>
            <div className="form-container">
                <input type="text" placeholder="Localização" name="inputCity" />
                <button type="submit">Pesquisar</button>
            </div>
        </div>
    );
}

export default App;

import './App.css';

function App() {
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

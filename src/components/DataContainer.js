function DataContainer(props) {
    return (
        <div className="data-container">
            <img
                src="./assets/{ApiData.weather[0].icon}"
                alt="weather-icon"
            ></img>
            <p>
                {props.ApiData.name} - {props.ApiData.sys.country}
            </p>
            <p>Tempo: {props.ApiData.weather[0].main}</p>
            <p>Descrição: {props.ApiData.weather[0].description}</p>
            <p>Temperatura: {(props.ApiData.main.temp - 273.15).toFixed()}°C</p>
            <p>
                Temperatura maxima:{' '}
                {(props.ApiData.main.temp_max - 273.15).toFixed()} °C
            </p>
            <p>
                Temperatura minima:{' '}
                {(props.ApiData.main.temp_min - 273.15).toFixed()} °C
            </p>
            <p>
                Sensação termica:{' '}
                {(props.ApiData.main.feels_like - 273.15).toFixed()} °C
            </p>
            <p>Humidade: {props.ApiData.main.humidity}%</p>
        </div>
    );
}

export default DataContainer;

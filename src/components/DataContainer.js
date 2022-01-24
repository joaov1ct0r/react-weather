import MainLogo from '../assets/icons/unknown.png';

function DataContainer(props) {
    return (
        <div className="data-container">
            <img
                className="weatherIcon"
                src={MainLogo}
                alt="weather-icon"
            ></img>
            <h2>
                {props.ApiData.name} - {props.ApiData.sys.country}
            </h2>
            <h3>{props.ApiData.weather[0].main}</h3>
            <h4>{props.ApiData.weather[0].description}</h4>
            <p>Temperatura: {(props.ApiData.main.temp - 273.15).toFixed()}°C</p>
            <p>
                Temperatura maxima:{' '}
                {(props.ApiData.main.temp_max - 273).toFixed()} °C
            </p>
            <p>
                Temperatura minima:{' '}
                {(props.ApiData.main.temp_min - 273).toFixed()} °C
            </p>
            <p>
                Sensação termica:{' '}
                {(props.ApiData.main.feels_like - 273).toFixed()} °C
            </p>
            <p>Humidade: {props.ApiData.main.humidity}%</p>
        </div>
    );
}

export default DataContainer;

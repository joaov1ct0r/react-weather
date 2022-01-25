function DataContainer(props) {
    console.log(props.ApiData);
    return (
        <div className="data-container">
            <h2>
                {props.ApiData.name} - {props.ApiData.sys.country}
            </h2>
            <img
                src={require(`../assets/icons/${props.ApiData.weather[0].icon}.png`)}
                alt="weather-icon"
            ></img>
            <h3>
                Temperatura: {(props.ApiData.main.temp - 273.15).toFixed()}°C
            </h3>
            <h3>
                {(props.ApiData.main.temp_min - 273.15).toFixed()} |{' '}
                {(props.ApiData.main.temp_max - 273.15).toFixed()}
            </h3>
            <h3>{props.ApiData.weather[0].main}</h3>
            <h4>{props.ApiData.weather[0].description}</h4>
        </div>
    );
}

export default DataContainer;

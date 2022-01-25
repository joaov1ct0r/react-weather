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
            <h4>{props.ApiData.weather[0].main}</h4>
            <h5>{props.ApiData.weather[0].description}</h5>
        </div>
    );
}

export default DataContainer;

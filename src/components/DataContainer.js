import MainLogo from '../assets/icons/unknown.png';

function DataContainer(props) {
    return (
        <div className="data-container">
            <h2>
                {props.ApiData.name} - {props.ApiData.sys.country}
            </h2>
            <h3>
                Temperatura: {(props.ApiData.main.temp - 273.15).toFixed()}°C
            </h3>
            <h4>{props.ApiData.weather[0].main}</h4>
            <h5>{props.ApiData.weather[0].description}</h5>
        </div>
    );
}

export default DataContainer;

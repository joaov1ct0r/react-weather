import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import DataContainer from './DataContainer';

interface IApiData {
  coord: {
    lon: number,
    lat: number,
  },
  weather: {
    0: {
      id: number,
      main: string,
      description: string,
      icon: string,
    }
  },
  base: string,
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number,

  },
  visibility: number,
  wind: {
    speed: number,
    deg: number,
  },
  clouds: {
    all: number,
  },
  dt: number,
  sys: {
    type: number,
    id: number,
    country: string,
    sunrise: number,
    sunset: number,
  },
  timezone: number,
  id: number,
  name: string,
  cod: number,
}

function FormContainer(): JSX.Element {
    let [City, setCity] = useState<string>('');

    let [ApiData, setApiData] = useState<IApiData | {}>({});

    function handleCity(event: React.ChangeEvent<HTMLInputElement>): void {
        setCity(event.target.value);
    }

    async function handleSearch(): Promise<void> {
        try {
            const URL: string = `${process.env.API_URL}?q=${City}&appid=${process.env.API_KEY}`;

            const response = await fetch(URL);

            const data = await response.json();

            setApiData(data);
        } catch (error: any){
            throw new Error(error);
        }
    }
    return (
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
    );
}

export default FormContainer;

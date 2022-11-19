import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import DataContainer from './DataContainer';
import IApiData from '../interfaces/IApiData';

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

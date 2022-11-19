import React, { useState } from 'react';
import DataContainer from './DataContainer';
import IApiData from '../interfaces/IApiData';
import FormCityInput from "./FormCityInput";
import FormSearchButton from "./FormSearchButton"

function FormContainer(): JSX.Element {
    let [City, setCity] = useState<string>('');

    let [ApiData, setApiData] = useState<IApiData | null>(null);

    function handleCity(event: React.ChangeEvent<HTMLInputElement>): void {
        setCity(event.target.value);
    }

    async function handleSearch(): Promise<void> {
        try {
            const URL: string = `${process.env.API_URL}?q=${City}&appid=${process.env.API_KEY}`;

            const response: Response = await fetch(URL);

            const data: IApiData = await response.json();

            setApiData(data);
        } catch (error: any){
            throw new Error(error);
        }
    }
    return (
        <div className="form-container">
            <FormCityInput handleCity={handleCity} />
            <FormSearchButton handleSearch={handleSearch} />
            {ApiData === null ? <></> : <DataContainer ApiData={ApiData} /> }
        </div>
    );
}

export default FormContainer;

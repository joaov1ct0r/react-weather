import { useState } from 'react';
import './App.css';
import IApiData from './interfaces/IApiData';
import FormContainer from './components/FormContainer.';
import DataContainer from './components/DataContainer';

function App() {
    let [City, setCity] = useState<string>('');

    let [ApiData, setApiData] = useState<IApiData | null>(null);

    function handleCity(event: React.ChangeEvent<HTMLInputElement>): void {
        setCity(event.target.value);
    }

    async function handleSearch(): Promise<void> {
        try {
            const URL: string = `${process.env.REACT_APP_API_URL}?q=${City}&appid=${process.env.REACT_APP_API_KEY}`;

            const request: Response = await fetch(URL);

            const response: IApiData = await request.json();

            setApiData(response);
        } catch (error: any){
           console.log(error)
        }
    }
    return (
        <div className="App">
          <h1>Weather App</h1>
          <FormContainer handleCity={handleCity} handleSearch={handleSearch} />
          { ApiData === null ? <></> :
          <DataContainer ApiData={ApiData} />
          }
        </div>
    );
}

export default App;

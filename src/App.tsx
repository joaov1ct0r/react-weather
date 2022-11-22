import React, { useContext } from "react";
import FormContainer from "./components/FormContainer.";
import DataContainer from "./components/DataContainer";
import { FormProvider, FormContext } from "./components/FormContext";
import IFormContextType from "./interfaces/IFormContextType";
import "./styles/App.css";

function App() {
  const { ApiData } = useContext(FormContext) as IFormContextType;
  return (
    <div className="App">
      <h1>Weather App</h1>
      <FormProvider>
        <FormContainer />
        {ApiData === null ? <></> : <DataContainer />}
      </FormProvider>
    </div>
  );
}

export default App;

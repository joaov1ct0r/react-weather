import React from "react";
import FormContainer from "./components/FormContainer";
import DataContainer from "./components/DataContainer";
import { FormProvider } from "./components/FormContext";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <FormProvider>
        <FormContainer />
        <DataContainer />
      </FormProvider>
    </div>
  );
}

export default App;

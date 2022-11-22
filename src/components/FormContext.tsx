import React, { useState, createContext } from "react";
import IApiData from "../interfaces/IApiData";
import IFormContextType from "../interfaces/IFormContextType";
import IFormContextProps from "../interfaces/IFormContextProps";

export const FormContext = createContext<IFormContextType | unknown>({});

export function FormProvider(props: IFormContextProps) {
  const [ApiData, setApiData] = useState<IApiData | null>(null);

  const [City, setCity] = useState<string>("");

  function handleCity(event: React.ChangeEvent<HTMLInputElement>): void {
    setCity(event.target.value);
  }

  async function handleSearch(): Promise<void> {
    try {
      const URL = `${process.env.REACT_APP_API_URL}?q=${City}&appid=${process.env.REACT_APP_API_KEY}`;

      const request: Response = await fetch(URL);

      const response: IApiData = await request.json();

      setApiData(response);
    } catch (error: unknown) {
      console.log(error);
    }
  }

  return (
    <FormContext.Provider
      value={{ ApiData, setApiData, City, setCity, handleCity, handleSearch }}
    >
      {props.children}
    </FormContext.Provider>
  );
}

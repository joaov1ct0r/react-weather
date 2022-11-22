import React, { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import IFormContextType from "../interfaces/IFormContextType";
import { FormContext } from "./FormContext";

function FormContainer(): JSX.Element {
  const { handleSearch, handleCity } = useContext(
    FormContext
  ) as IFormContextType;
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
    </div>
  );
}

export default FormContainer;

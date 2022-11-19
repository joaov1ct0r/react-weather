import React from 'react';
import { FiSearch } from 'react-icons/fi';

interface IFormSearchButtonProps {
  handleSearch (): Promise<void> 
}

function FormSearchButton ({ handleSearch}: IFormSearchButtonProps): JSX.Element {
  return (
    <button onClick={handleSearch} type="submit">
      <FiSearch size={20} color="#FFF"></FiSearch>
    </button>
  )
}

export default FormSearchButton;

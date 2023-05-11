import React, { useContext } from 'react'
import { FiSearch } from 'react-icons/fi'
import IFormContextType from '../interfaces/IFormContextType'
import { FormContext } from './FormContext'

function FormContainer (): JSX.Element {
  const { handleSearch, handleCity } = useContext(
    FormContext
  ) as IFormContextType
  return (
    <div className='form-container' data-testid='form-div'>
      <input
        onChange={handleCity}
        type='text'
        placeholder='Localização'
        name='inputCity'
        data-testid='city-input'
      />
      <button onClick={handleSearch} type='submit' data-testid='search-button'>
        <FiSearch size={20} color='#FFF' />
      </button>
    </div>
  )
}

export default FormContainer

import { FiSearch } from 'react-icons/fi';
import IFormContainerProps from '../interfaces/IFormContainerProps';

function FormContainer ({ handleCity, handleSearch}: IFormContainerProps): JSX.Element {
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
  )
}

export default FormContainer;

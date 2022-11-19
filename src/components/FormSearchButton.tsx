import { FiSearch } from 'react-icons/fi';
import IFormSearchButtonProps from '../interfaces/IFormSearchButtonProps';

function FormSearchButton ({ handleSearch}: IFormSearchButtonProps): JSX.Element {
  return (
    <button onClick={handleSearch} type="submit">
      <FiSearch size={20} color="#FFF"></FiSearch>
    </button>
  )
}

export default FormSearchButton;

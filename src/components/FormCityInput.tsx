import IFormCityInputProps from '../interfaces/IFormCityInputProps';

function FormCityInput ({ handleCity }: IFormCityInputProps): JSX.Element {
  return (
    <input
      onChange={handleCity}
      type="text"
      placeholder="Localização"
      name="inputCity"
    />
  )
}

export default FormCityInput;

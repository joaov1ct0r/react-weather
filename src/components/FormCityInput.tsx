import React from 'react';

interface IFormCityInputProps {
  handleCity: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

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

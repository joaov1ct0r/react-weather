import React from "react";

export default interface IFormContainerProps {
  handleCity(event: React.ChangeEvent<HTMLInputElement>): void;
  handleSearch(): Promise<void>;
}

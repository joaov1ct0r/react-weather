import IApiData from "./IApiData";

export default interface IFormContextType {
  ApiData: IApiData | null;
  setApiData: React.Dispatch<React.SetStateAction<IApiData | null>>;
  City: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  handleCity(event: React.ChangeEvent<HTMLInputElement>): void;
  handleSearch(): Promise<void>;
}

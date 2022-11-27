import React, { useContext } from "react";
import "@testing-library/jest-dom";
import { render, renderHook, screen, waitFor } from "@testing-library/react";
import DataContainer from "../../src/components/DataContainer";
import IFormContextProps from "../../src/interfaces/IFormContextProps";
import { FormContext, FormProvider } from "../../src/components/FormContext";
import IFormContextType from "../../src/interfaces/IFormContextType";
import { act } from "react-dom/test-utils";

describe("data container", () => {
  it("should render fragment-div if ApiData is null", () => {
    render(<DataContainer />);

    const fragmentDiv = screen.getByTestId("fragment-div");

    expect(fragmentDiv).toBeInTheDocument();
  });

  // it("should render ApiData", async () => {
  //   const wrapper = ({ children }: IFormContextProps) => (
  //     <FormProvider>{children}</FormProvider>
  //   );

  //   const { result } = renderHook(
  //     () => useContext(FormContext) as IFormContextType,
  //     {
  //       wrapper,
  //     }
  //   );

  //   await act(() => {
  //     result.current.setApiData({
  //       coord: {
  //         lon: 2.3488,
  //         lat: 48.8534,
  //       },
  //       weather: [
  //         {
  //           id: 800,
  //           main: "Clear",
  //           description: "clear sky",
  //           icon: "01n",
  //         },
  //       ],
  //       base: "stations",
  //       main: {
  //         temp: 279.94,
  //         feels_like: 277.75,
  //         temp_min: 277.92,
  //         temp_max: 280.58,
  //         pressure: 1026,
  //         humidity: 91,
  //       },
  //       visibility: 10000,
  //       wind: {
  //         speed: 3.09,
  //         deg: 260,
  //       },
  //       clouds: {
  //         all: 0,
  //       },
  //       dt: 1669408145,
  //       sys: {
  //         type: 1,
  //         id: 6550,
  //         country: "FR",
  //         sunrise: 1669360468,
  //         sunset: 1669392060,
  //       },
  //       timezone: 3600,
  //       id: 2988507,
  //       name: "Paris",
  //       cod: 200,
  //     });
  //   });

  //   render(<DataContainer />);

  //   expect(result.current.ApiData).toStrictEqual({
  //     coord: {
  //       lon: 2.3488,
  //       lat: 48.8534,
  //     },
  //     weather: [
  //       {
  //         id: 800,
  //         main: "Clear",
  //         description: "clear sky",
  //         icon: "01n",
  //       },
  //     ],
  //     base: "stations",
  //     main: {
  //       temp: 279.94,
  //       feels_like: 277.75,
  //       temp_min: 277.92,
  //       temp_max: 280.58,
  //       pressure: 1026,
  //       humidity: 91,
  //     },
  //     visibility: 10000,
  //     wind: {
  //       speed: 3.09,
  //       deg: 260,
  //     },
  //     clouds: {
  //       all: 0,
  //     },
  //     dt: 1669408145,
  //     sys: {
  //       type: 1,
  //       id: 6550,
  //       country: "FR",
  //       sunrise: 1669360468,
  //       sunset: 1669392060,
  //     },
  //     timezone: 3600,
  //     id: 2988507,
  //     name: "Paris",
  //     cod: 200,
  //   });

  //   await waitFor(() => {
  //     expect(screen.findByTestId("data-div")).toBeInTheDocument();
  //   });
  // });
});

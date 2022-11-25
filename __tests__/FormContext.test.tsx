import React, { useContext } from "react";
import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react";
import { FormContext, FormProvider } from "../src/components/FormContext";
import IFormContextType from "../src/interfaces/IFormContextType";
import IFormContextProps from "../src/interfaces/IFormContextProps";
import { act } from "react-dom/test-utils";

describe("DataContainer", () => {
  it("should render with ApiData being null", () => {
    const wrapper = ({ children }: IFormContextProps) => (
      <FormProvider>{children}</FormProvider>
    );
    const { result } = renderHook(
      () => useContext(FormContext) as IFormContextType,
      {
        wrapper,
      }
    );

    expect(result.current.ApiData).toStrictEqual(null);
  });

  it("should set ApiData", () => {
    const wrapper = ({ children }: IFormContextProps) => (
      <FormProvider>{children}</FormProvider>
    );
    const { result } = renderHook(
      () => useContext(FormContext) as IFormContextType,
      {
        wrapper,
      }
    );

    act(() => {
      result.current.setApiData({
        coord: {
          lon: 2.3488,
          lat: 48.8534,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        base: "stations",
        main: {
          temp: 279.94,
          feels_like: 277.75,
          temp_min: 277.92,
          temp_max: 280.58,
          pressure: 1026,
          humidity: 91,
        },
        visibility: 10000,
        wind: {
          speed: 3.09,
          deg: 260,
        },
        clouds: {
          all: 0,
        },
        dt: 1669408145,
        sys: {
          type: 1,
          id: 6550,
          country: "FR",
          sunrise: 1669360468,
          sunset: 1669392060,
        },
        timezone: 3600,
        id: 2988507,
        name: "Paris",
        cod: 200,
      });
    });

    expect(result.current.ApiData).toStrictEqual({
      coord: {
        lon: 2.3488,
        lat: 48.8534,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      base: "stations",
      main: {
        temp: 279.94,
        feels_like: 277.75,
        temp_min: 277.92,
        temp_max: 280.58,
        pressure: 1026,
        humidity: 91,
      },
      visibility: 10000,
      wind: {
        speed: 3.09,
        deg: 260,
      },
      clouds: {
        all: 0,
      },
      dt: 1669408145,
      sys: {
        type: 1,
        id: 6550,
        country: "FR",
        sunrise: 1669360468,
        sunset: 1669392060,
      },
      timezone: 3600,
      id: 2988507,
      name: "Paris",
      cod: 200,
    });
  });

  it("should render with city being null", () => {
    const wrapper = ({ children }: IFormContextProps) => (
      <FormProvider>{children}</FormProvider>
    );
    const { result } = renderHook(
      () => useContext(FormContext) as IFormContextType,
      {
        wrapper,
      }
    );

    expect(result.current.City).toStrictEqual("");
  });

  it("should setCity", () => {
    const wrapper = ({ children }: IFormContextProps) => (
      <FormProvider>{children}</FormProvider>
    );
    const { result } = renderHook(
      () => useContext(FormContext) as IFormContextType,
      {
        wrapper,
      }
    );

    act(() => {
      result.current.setCity("paris");
    });

    expect(result.current.City).toStrictEqual("paris");
  });
});

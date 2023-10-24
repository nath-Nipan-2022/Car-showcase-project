import { CarProps, FetchOptions } from "../types";

export const fetchCars = async (options: FetchOptions) => {
  const BASE_URL = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?";

  const { manufacturer, model, year, limit, fuel } = options;

  const headers = {
    "X-RapidAPI-Key": import.meta.env.VITE_X_RAPIDAPI_KEY,
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  try {
    const res = await fetch(
      `${BASE_URL}make=${manufacturer}&model=${model}&year=${year}&limit=${limit}&fuel_type=${fuel}`,
      {
        method: "GET",
        headers,
      }
    );
    const result = res.json();
    return result;
  } catch (error) {
    console.log(error);

    return error;
  }
};

export const getCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  const { make, model, year } = car;

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle ?? ""}`);

  return `${url}`;
};

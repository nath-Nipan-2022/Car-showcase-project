export const fetchCars = async (query: string) => {
  const BASE_URL =
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla" + query;

  const headers = {
    "X-RapidAPI-Key": import.meta.env.VITE_X_RAPIDAPI_KEY,
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  try {
    const res = await fetch(BASE_URL, {
      method: "GET",
      headers,
    });
    const result = res.json();
    return result;
  } catch (error) {
    console.log(error);

    return error;
  }
};

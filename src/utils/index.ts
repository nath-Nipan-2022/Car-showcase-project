export const getCarRentPerDay = (city_mpg: number, year: number) => {
  const baseRentPerDay = 50; // default rent price / day
  const milageFactor = 0.1; // additional milage rate
  const ageFactor = 0.05; // additional age rate / year

  const milageRate = city_mpg * milageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentPerDay = baseRentPerDay + ageRate + milageRate;
  return rentPerDay.toFixed(0);
};

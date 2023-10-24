import { useEffect, useState } from "react";
import { CarProps } from "../types";

import Filter from "../components/Filter";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";

import { fetchCars } from "../services/api";
import CarItem from "../components/CarItem";
import { useSearchParams } from "react-router-dom";
import { fuels, yearsOfProduction } from "../constants";

const Home = () => {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    fetchCars({
      manufacturer: searchParams.get("manufacturer") ?? "",
      model: searchParams.get("model") ?? "",
      year: Number(searchParams.get("year")) ?? 2022,
      fuel: searchParams.get("fuel") ?? "",
      limit: Number(searchParams.get("limit")) ?? 10,
    }).then((cars) => {
      setCars(cars);
    });
  }, [searchParams]);

  return (
    <>
      <Hero />

      <section className="mt-12 padding-x padding-y max-width" id="discover">
        <h2 className="text-4xl font-extrabold text-black-100">
          Car Catalogue
        </h2>
        <p className="mt-2.5 text-black-100">Explore the cars you like</p>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <Filter title="fuel" options={fuels} />
            <Filter title="year" options={yearsOfProduction} />
          </div>
        </div>
      </section>

      <section>
        <div className="home__cars-wrapper padding-x ">
          {cars.length > 0 ? (
            cars.map((car, i) => <CarItem key={i} car={car} />)
          ) : (
            <div className="text-red-900 bg-red-200">NO DATA FOUND</div>
          )}
        </div>
      </section>
    </>
  );
};
export default Home;

import { useEffect, useState } from "react";
import { CarProps } from "../types";

import Filter from "../components/Filter";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";

import { fetchCars } from "../services/api";
import CarItem from "../components/CarItem";

const Home = () => {
  const [cars, setCars] = useState<CarProps[]>([]);

  useEffect(() => {
    fetchCars("").then((cars) => {
      setCars(cars);
    });
  }, []);

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
            <Filter title="fuel" />
            <Filter title="year" />
          </div>
        </div>
      </section>

      <section>
        <div className="home__cars-wrapper">
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

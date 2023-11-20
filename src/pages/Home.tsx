import { useEffect, useState } from "react";
import { CarProps } from "../types";

import Filter from "../components/Filter";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import CarItem from "../components/CarItem";
import ShowMore from "../components/ShowMore";
import CardSkeleton from '../components/CardSkeleton';

import { fetchCars } from "../services/api";
import { useSearchParams } from "react-router-dom";
import { fuels, yearsOfProduction } from "../constants";
import { updateSearchParams } from "../utils";

const Home = () => {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const limit = Number(searchParams.get("limit") ?? 10);

  const handleNavigation = () => {
    const nextLimit = limit + 1 * 10;
    updateSearchParams(searchParams, "limit", `${nextLimit}`);
    setSearchParams(searchParams, { replace: true });
  };

  useEffect(() => {
    setIsLoading(true);
    fetchCars({
      manufacturer: searchParams.get("manufacturer") ?? "",
      model: searchParams.get("model") ?? "",
      year: Number(searchParams.get("year") ?? 2022),
      fuel: searchParams.get("fuel") ?? "",
      limit,
    }).then((cars) => {
      setCars(cars);
      setIsLoading(false);
    });
  }, [searchParams, limit]);

  return (
    <>
      <Hero />

      <section className="mt-12 padding-x padding-y max-width" id="explore">
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
          {isLoading ? (
            [...Array(cars.length || 10)].map((_, i) => (
              <CardSkeleton key={i} />
            ))
          ) : cars.length > 0 ? (
            cars.map((car, i) => <CarItem key={i} car={car} />)
          ) : (
            <div className="home__error-container">
              <h3 className="text-black-100 text-xl font-bold">
                Oops, No Data Found
              </h3>
            </div>
          )}
        </div>

        {/* Loader */}
        {isLoading && (
          <div className="grid h-16 mt-10 place-items-center">
            <div>
              <span className="w-10 h-10 border-[5px] border-primary-blue border-b-transparent rounded-full inline-block animate-spin"></span>
            </div>
          </div>
        )}

        <ShowMore hasMore={cars.length >= limit} onClick={handleNavigation} />
      </section>
    </>
  );
};
export default Home;

import { FormEvent, useState } from "react";

import SearchManufacturer from "./SearchManufacturer";
import { useSearchParams } from "react-router-dom";
import { updateSearchParams } from "../utils";
const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    updateSearchParams(searchParams, "manufacturer", manufacturer);
    updateSearchParams(searchParams, "model", model);
    setSearchParams(searchParams, { replace: true });
  };

  return (
    <form className="searchbar relative" onSubmit={handleSubmit}>
      <SearchManufacturer
        manufacturer={manufacturer}
        setManufacturer={setManufacturer}
      ></SearchManufacturer>

      <div className="searchbar__item relative">
        <img
          src="/model-icon.png"
          alt="car model"
          width={25}
          height={25}
          className="absolute w-5 h-5 ml-4"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <button
          type="submit"
          className="absolute right-3 top-2.5 w-7 h-7 rounded-full"
        >
          <img
            src="/magnifying-glass.svg"
            alt="search icon"
            width={24}
            height={24}
            className="w-7 h-7 dark:invert"
          />
        </button>
      </div>
    </form>
  );
};
export default SearchBar;

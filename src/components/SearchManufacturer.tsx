import { Combobox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { manufacturers } from "../constants";

type Props = {
  manufacturer: string;
  setManufacturer: (value: string) => void;
};

function SearchManufacturer({ manufacturer, setManufacturer }: Props) {
  const [query, setQuery] = useState("");

  const filteredManufactures =
    query !== ""
      ? manufacturers.filter((manufacturer) =>
          manufacturer
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        )
      : manufacturers;

  return (
    <div className="flex-1 z-10">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-3.5">
            <img
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="car logo"
            />
          </Combobox.Button>

          <Combobox.Input
            className="search-manufacturer__input"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="search-manufacturer__options">
              {filteredManufactures.map((item) => (
                <Combobox.Option
                  key={item}
                  value={item}
                  className={({ active, selected }) =>
                    `relative cursor-pointer search-manufacturer__option ${
                      active || selected
                        ? "bg-primary-blue text-white"
                        : "text-gray-900 dark:text-primary-blue-100/80"
                    }`
                  }
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {item}
                      </span>
                    </>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
      <button
        type="submit"
        className="absolute right-3 top-2.5 w-7 h-7 sm:hidden z-0 rounded-full"
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
  );
}

export default SearchManufacturer;

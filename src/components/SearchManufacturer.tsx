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
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredManufactures.map((item) => (
                <Combobox.Option
                  key={item}
                  value={item}
                  className={({ active, selected }) =>
                    `relative cursor-pointer search-manufacturer__option ${
                      active || selected
                        ? "bg-primary-blue text-white"
                        : "text-gray-900"
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
    </div>
  );
}

export default SearchManufacturer;

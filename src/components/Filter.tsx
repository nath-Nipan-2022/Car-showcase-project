import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FilterComponentProps, Option } from "../types";
import { updateSearchParams } from "../utils";

const Filter = ({ title, options }: FilterComponentProps) => {
  const [selectedOption, setSelected] = useState(options[0]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilter = ({ value }: Option) => {
    updateSearchParams(searchParams, title, value);
    setSearchParams(searchParams, { replace: true });
  };

  return (
    <div>
      <Listbox
        value={selectedOption}
        onChange={(v) => {
          setSelected(v);
          handleFilter(v);
        }}
      >
        <div className="relative w-fit">
          <Listbox.Button className="custom-filter__btn capitalize">
            <span>{searchParams.get(title) ?? selectedOption.title}</span>
            <img
              src="/chevron-up-down.svg"
              alt="chevron up down"
              width={20}
              height={20}
              className="ml-4 object-contain"
            />
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              {options.map((option) => (
                <Listbox.Option
                  key={option.value}
                  className={({ active, selected }) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                      active || selected
                        ? "bg-primary-blue text-white"
                        : "text-gray-900"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {option.title}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
export default Filter;

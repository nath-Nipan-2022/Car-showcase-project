import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { getCarImageUrl } from "../services/api";
import { CarProps } from "../types";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  car: CarProps;
};

const CarDetails = ({ car, isOpen, onClose }: Props) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        {/* overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-lg max-h-[90vh] transform overflow-hidden rounded-2xl bg-white dark:bg-primary-blue-800 p-6 text-left shadow-xl transition-all overflow-y-auto">
                <div className="flex flex-col gap-3">
                  <div className="relative w-full h-44 bg-pattern bg-cover bg-center rounded-lg">
                    <img
                      src={getCarImageUrl(car)}
                      alt="car model"
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex-1 h-24 bg-primary-blue-100 dark:bg-primary-blue/50 rounded-lg">
                      <img
                        src={getCarImageUrl(car, "29")}
                        alt="car model"
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <div className="flex-1 h-24 bg-primary-blue-100 dark:bg-primary-blue/50 rounded-lg">
                      <img
                        src={getCarImageUrl(car, "33")}
                        alt="car model"
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <div className="flex-1 h-24 bg-primary-blue-100 dark:bg-primary-blue/50 rounded-lg">
                      <img
                        src={getCarImageUrl(car, "13")}
                        alt="car model"
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t dark:border-gray-800 mt-6 pt-4 flex flex-col gap-2">
                  <h2 className="font-semibold text-xl capitalize dark:text-gray-300">
                    {car.make} {car.model}
                  </h2>
                </div>
                <div className="mt-3 flex flex-col gap-4">
                  {Object.entries(car).map(([key, value]) => {
                    return (
                      <div
                        className="flex justify-between gap-5 text-right"
                        key={key}
                      >
                        <h4 className="text-grey capitalize dark:text-gray-400">
                          {key.split("_").join(" ")}
                        </h4>
                        <p className="text-black-100 font-semibold dark:text-gray-400">
                          {value}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <button
                  type="button"
                  className="absolute top-2 right-2 z-10 w-fit rounded-full bg-primary-blue-100 p-2 hover:bg-blue-50 dark:bg-primary-blue-800 dark:hover:bg-gray-700"
                  onClick={onClose}
                >
                  <img
                    src="/close.svg"
                    alt="close icon"
                    width={16}
                    height={16}
                    className="object-contain dark:invert-[.75]"
                  />
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
export default CarDetails;

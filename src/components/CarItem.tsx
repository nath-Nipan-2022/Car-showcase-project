import { useState } from "react";
import { CarProps } from "../types";
import { getCarRentPerDay } from "../utils";
import Button from "./Button";
import CarDetails from "./CarDetails";
import { getCarImageUrl } from "../services/api";

type Props = {
  car: CarProps;
};

const CarItem = ({ car }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const { city_mpg, year, make, model, transmission, drive } = car;

  return (
    <div className="car-card group">
      <h3 className="car-card__title w-full">
        {make} {model}
      </h3>

      <p className="flex mt-6 car-card__text-sm">
        <span className="font-semibold">$</span>
        <span className="car-card__price">
          {getCarRentPerDay(city_mpg, year)}
        </span>
        <span className="self-end font-medium">/day</span>
      </p>

      <div className="car-card__image">
        <img
          src={getCarImageUrl(car)}
          alt="car model"
          className="object-contain w-full h-full"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="car-card__icons-container">
          <div className="car-card__icon">
            <img
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="car-card__text-sm">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="car-card__icon">
            <img src="/tire.svg" width={20} height={20} alt="seat" />
            <p className="car-card__text-sm">{drive.toUpperCase()}</p>
          </div>
          <div className="car-card__icon">
            <img src="/gas.svg" width={20} height={20} alt="seat" />
            <p className="car-card__text-sm">{city_mpg} MPG</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <Button
            title="View More"
            variant="primary"
            size="small"
            icon="/right-arrow.svg"
            iconStyle="transition duration-500 group-hover/btn:translate-x-2"
            className="w-full py-[16px] rounded-full group/btn"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CarDetails isOpen={isOpen} onClose={() => setIsOpen(false)} car={car} />
    </div>
  );
};
export default CarItem;

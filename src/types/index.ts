// import { ReactNode } from "react";

export interface ButtonProps {
  variant: "primary" | "secondary";
  size: "small" | "medium" | "large";
  title: string;
  icon?: string;
  iconPosition?: "left" | "right";
  iconStyle?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

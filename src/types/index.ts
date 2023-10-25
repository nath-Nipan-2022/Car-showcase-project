import { ReactNode } from "react";

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
  children?: ReactNode;
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

export interface FetchOptions {
  manufacturer: string;
  model: string;
  year: number;
  fuel: string;
  limit: number;
}

export interface Option {
  title: string;
  value: string;
}

export interface FilterComponentProps {
  title: string;
  options: Option[];
}

export interface ShowMoreProps {
  hasMore: boolean;
  onClick: () => void;
}

import { ButtonProps } from "../types";

const Button = ({
  variant,
  size,
  title,
  icon,
  iconStyle,
  iconPosition,
  className,
  onClick,
  disabled,
}: ButtonProps) => {
  const variants = {
    primary: "bg-primary-blue text-white rounded-full hover:bg-blue-700",
    secondary: "bg-black-100 text-white hover:bg-white hover:text-black",
  };

  const sizes = {
    small: "px-3 py-1 text-sm",
    medium: "px-5 py-2",
    large: "px-6 py-2.5 text-lg",
  };

  const hasIcon = {
    className: "flex items-center gap-3 justify-center",
    position: { left: "flex-row-reverse", right: "" },
  };

  return (
    <button
      className={`transition duration-300 ${variants[variant]} ${sizes[size]} ${
        icon ? hasIcon.className : ""
      } ${
        icon && iconPosition ? hasIcon.position[iconPosition] : ""
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
      {icon && <img src={icon} alt="icon" className={iconStyle} />}
    </button>
  );
};
export default Button;

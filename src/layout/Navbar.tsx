import { Link } from "react-router-dom";

import useTheme from "../hooks/useTheme";

const Navbar = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <header className="absolute w-full left-0 top-0 z-10">
      <nav className="sm:px-16 px-6 py-4 max-width flex gap-5 justify-between items-center">
        <Link to={"/"}>
          <img
            src="/logo.svg"
            alt="Car hub logo"
            loading="lazy"
            width={115}
            height={18}
            className="dark:invert"
          />
        </Link>

        <div className="flex items-center space-x-2">
          <button
            className="w-10 h-10 flex-center rounded-full hover:bg-blue-50 dark:bg-slate-800 dark:text-light-white-100 bg-white"
            onClick={() => {
              const nextTheme = theme === "dark" ? "light" : "dark";
              changeTheme(nextTheme);
            }}
          >
            <img
              src={theme === "dark" ? "/sun.svg" : "/half-moon.svg"}
              alt="theme icon"
              width={17}
              height={17}
            />
          </button>

          <Link
            to="/signin"
            className="font-semibold bg-white text-primary-blue px-5 py-2 rounded-full whitespace-nowrap hover:bg-blue-100 transition hover:text-blue-950"
          >
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;

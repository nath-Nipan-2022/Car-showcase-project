import { Link } from "react-router-dom";

const Navbar = () => {
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
          />
        </Link>

        <Link
          to="/signin"
          className="font-semibold bg-white text-primary-blue px-5 py-2 rounded-full whitespace-nowrap hover:bg-blue-100 transition hover:text-blue-950"
        >
          Sign In
        </Link>
      </nav>
    </header>
  );
};
export default Navbar;

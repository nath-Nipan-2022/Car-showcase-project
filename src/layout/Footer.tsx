import { Link } from "react-router-dom";
import { footerLinks } from "../constants";

const Footer = () => (
  <footer className="footer">
    <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
      <div className="flex flex-col justify-start items-start gap-6">
        <img
          src="/logo.svg"
          alt="logo"
          width={115}
          height={18}
          className="object-contain dark:invert"
        />
        <p className="text-base text-gray-700 dark:text-gray-300">
          Carhub 2023 <br />
          All Rights Reserved &copy;
        </p>
      </div>

      <div className="footer__links">
        {footerLinks.map((item) => (
          <div key={item.title} className="footer__link">
            <h3 className="font-bold">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
                <Link key={link.title} to={link.url} className="text-gray-500">
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="footer__copyrights">
      <p className="mr-8">@2023 CarHub. All rights reserved</p>

      <div className="footer__copyrights-link">
        <Link to="/" className="text-gray-500">
          Privacy & Policy
        </Link>
        <Link to="/" className="text-gray-500">
          Terms & Condition
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;

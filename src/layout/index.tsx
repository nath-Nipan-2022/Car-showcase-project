import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ThemeProvider } from "../context/ThemeContext";

const Layout = () => {
  return (
    <ThemeProvider>
      <div className="max-width overflow-hidden dark:bg-primary-blue-900 dark:text-primary-blue-100">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};
export default Layout;

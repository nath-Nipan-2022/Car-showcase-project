import Hero from "../components/Hero";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="bg-blue-100 text-black-100">
      <div className="min-h-screen max-w-6xl mx-auto">
        <Navbar />
        <main className="bg-white p-5 overflow-hidden">
          <Hero />
        </main>
        <Footer />
      </div>
    </div>
  );
};
export default Layout;

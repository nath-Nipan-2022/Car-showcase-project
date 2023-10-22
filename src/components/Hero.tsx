import Button from "./Button";

const Hero = () => {
  return (
    <section className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, rent a car—quick and super easy!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <Button
          title="Explore Cars"
          variant="primary"
          size="medium"
          className="mt-10 shadow-xl shadow-blue-100"
        />
      </div>
      <div className="hero__image-container">
        <figure className="hero__image">
          <img
            src="/hero.png"
            alt="hero"
            loading="lazy"
            className="object-contain w-full h-full"
          />
        </figure>

        <div className="hero__image-overlay" />
      </div>
    </section>
  );
};

export default Hero;

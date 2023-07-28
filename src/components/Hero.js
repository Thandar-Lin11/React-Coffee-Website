import { Fade } from "react-reveal";
const Hero = () => {
  const orderNow = () => {
    window.scrollTo({
      top: 1150,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="hero section"
      id="home"
      style={{ backgroundImage: `url(./media/bg-hero.jpg)` }}
    >
      <Fade top>
        <h1 className="hero__title">
          Begin Your Day <br />
          With your Favorite Coffee <br />
          And a Cozy Place <br />
          To Embrace Romance and Love.
        </h1>
        <button className="hero__button" onClick={orderNow}>
          Order Now
        </button>
      </Fade>
    </section>
  );
};

export default Hero;

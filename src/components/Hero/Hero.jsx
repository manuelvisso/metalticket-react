import React from "react";
import "../Hero/Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div>
        <p className="hero__slogan">¡Música que resuena!</p>
      </div>
      <div>
        <button type="button" className="hero__btn">
          <a className="hero__btn__link" href="#">
            Registrarse
          </a>
        </button>
      </div>
    </div>
  );
};

export default Hero;

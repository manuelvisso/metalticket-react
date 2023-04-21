import React from "react";
import "../Hero/Hero.scss";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/signup");
  };

  return (
    <div className="hero">
      <div>
        <p className="hero__slogan">¡Música que resuena!</p>
      </div>
      <div>
        <button type="button" className="hero__btn" onClick={handleClick}>
          Registrarse
        </button>
      </div>
    </div>
  );
};

export default Hero;

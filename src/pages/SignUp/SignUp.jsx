import React from "react";
import logo from "../../assets/logo/logo-no-bg.png";
import { useNavigate } from "react-router-dom";
import "../SignUp/SignUp.scss";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/");
  };

  return (
    <div className="signup">
      <div className="signup__container">
        <div className="signup__logo">
          <img src={logo} alt="logo de www.metalticket.com" />
        </div>
        <div className="signup__form">
          <div className="signup__form__data">
            <label htmlFor="name"></label>
            <input type="text" name="name" id="name" placeholder="Nombre" />
            <label htmlFor="email"></label>
            <input type="email" name="email" id="email" placeholder="e-mail" />
            <label htmlFor="email-confirmation"></label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Establecer contraseña"
            />
            <label htmlFor="Apellido"></label>
            <input
              type="text"
              name="apellido"
              id="apellido"
              placeholder="Apellido"
            />
            <label htmlFor="telefono"></label>
            <input
              type="tel"
              name="telefono"
              id="telefono"
              placeholder="Nro. Telefónico"
            />
            <label htmlFor="confirmar-password"></label>
            <input
              type="password"
              name="confirmar-password"
              id="password-confirm"
              placeholder="Confirmar contraseña"
            />
          </div>
        </div>
        <button type="submit" onClick={handleSubmit}>
          Crear Cuenta
        </button>
      </div>
    </div>
  );
};

export default SignUp;

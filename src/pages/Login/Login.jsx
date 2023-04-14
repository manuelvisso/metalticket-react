import React from "react";
import "../Login/Login.scss";
import logo from "../../assets/logo/logo-no-bg.png";

const Login = () => {
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__logo">
          <img src={logo} alt="logo de www.metalticket.com" />
        </div>
        <div className="login__form">
          <div className="login__form__data">
            <label for="usuario" />
            <input
              type="text"
              name="usuario"
              id="usuario"
              placeholder="Usuario o e-mail"
            />

            <label for="password" />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Contraseña"
            />
          </div>
          <div className="login__form__check">
            <label for="recordar-credenciales">Recordar contraseña</label>
            <input
              type="checkbox"
              name="recordar-credenciales"
              id="recordar-credenciales"
            />
          </div>
          <button type="submit" className="login__button">
            Iniciar Sesión
          </button>

          <div className="login__form__options">
            <p>
              Si olvidaste tu contraseña, presiona <a href="#"> aquí</a>
            </p>

            <p>
              ¿Aún no te has registrado?. Presiona
              <a href="#"> aquí</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

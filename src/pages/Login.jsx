import React from "react";

const Login = () => {
  return (
    <div>
      <div class="section-container">
        <section class="login">
          <div class="login-logo">
            <img src="/assets/logo/metalticket-removebg.png" alt="" />
          </div>
          <div class="login-form">
            <div class="user-data">
              <label for="usuario"></label>
              <input
                type="text"
                name="usuario"
                id="usuario"
                placeholder="Usuario o e-mail"
              />

              <label for="password"></label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Contraseña"
              />
            </div>
            <div>
              <label for="recordar-credenciales">Recordar contraseña</label>
              <input
                type="checkbox"
                name="recordar-credenciales"
                id="recordar-credenciales"
              />
            </div>

            <a href="/index.html">
              <button type="submit" class="login-btn">
                Iniciar Sesión
              </button>
            </a>

            <div class="otros-accesos">
              <p>
                Si olvidaste tu contraseña, presiona <a href="#">aquí</a>
              </p>

              <p>
                ¿Aún no te has registrado?. Presiona
                <a href="/assets/login-registro/signup.html">aquí</a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;

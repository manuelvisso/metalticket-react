import React from "react";
import "../messages/ErrorMsg.scss";

const ErrorMsg = () => {
  return (
    <div>
      <article className="error__message">
        <h3 className="error__message__text">
          No se encuentran resultados para la busqueda realizada.
        </h3>
        <h4 className="error__message__text">
          Por favor, intente una nueva busqueda
        </h4>
      </article>
    </div>
  );
};

export default ErrorMsg;

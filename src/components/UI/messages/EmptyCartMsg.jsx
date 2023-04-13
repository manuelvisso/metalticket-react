import React from "react";
import "./ErrorMsg.scss";

const EmptyCartMsg = () => {
  return (
    <div>
      <p className="error__message__text">El carrito de compras está vacío</p>
    </div>
  );
};

export default EmptyCartMsg;

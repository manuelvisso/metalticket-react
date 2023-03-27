import React from "react";
import { CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import "../Footer/Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__link">
        <a href="">Términos de Uso</a>
        <a href="">Política de Privacidad</a>
        <a href="">Soporte</a>
      </div>
      <div className="footer__rrss">
        <p>Manuel Visso</p>
        <div>
          <a href="">
            <FaGithub />
          </a>
          <a href="">
            <CiMail />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

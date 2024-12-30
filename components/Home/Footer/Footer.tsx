import React from "react";
import { FaCity, FaClock, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#222731] py-10">
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8 justify-evenly">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div>
            <img src="/images/logo.jpg" alt="logo" className="w-20 h-20 mr-2" />
            <h1 className="text-xl md:text-2xl font-bold text-white">
              Inoxilab
            </h1>
            <p className="mt-4 text-sm font-medium text-white leading-[2rem] w-[80%]">
              Soluciones de software a medida para tu empresa o negocio.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Nuestras redes</h3>
            {/* About us, links and socials */}
            <ul className="mt-4 space-y-4 text-sm font-semibold text-white">
              <li>
                <a
                  href="https://www.instagram.com/inoxilabbahia/"
                  target="_blank"
                >
                  <FaInstagram className="inline-block mr-2" />
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://web.facebook.com/profile.php?id=61571351310684" target="_blank">
                  <FaFacebook className="inline-block mr-2" />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/inoxilab/"
                  target="_blank"
                >
                  <FaLinkedin className="inline-block mr-2" />
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Información de contacto</h3>
            {/* Contacto */}
            <ul className="mt-4 space-y-4 text-sm font-semibold text-white">
              <li>
                <FaCity className="inline-block mr-2" /> Bahia Blanca, Argentina
              </li>
              <li>
                <FaPhone className="inline-block mr-2" /> +5492916446200 - +5492914625155
              </li>
              <li>
                <FaClock className="inline-block mr-2" /> Lunes a Viernes de 9:00 a 18:00
              </li>
              <li>
                <FaEnvelope className="inline-block mr-2" /> inoxilabbahia@gmail.com
              </li>
            </ul>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-8 text-sm font-medium text-white text-center">
          &copy; 2024 Inoxilab. Todos los derechos reservados.
        </div>
      </div>
    </div>
  );
};

export default Footer;

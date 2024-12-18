import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const AnalyticsFeature = () => {
  return (
    <div className="pt-24 pb-16 bg-[#fcf6fa]">
      {/* Define grid */}
      <div className="w-[95%] sm:w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image content */}
        <div>
          <Image
            src="/images/a.jpg"
            alt="image"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
        {/* Text content */}
        <div>
          <h1 className="text-base font-semibold text-orange-500">
            Analisis de datos
          </h1>
          <h1 className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            Diseñamos herramientas con análisis de datos para que puedas tomar
            mejores decisiones
          </h1>
          <p className="mt-4 text-gray-600 text-sm font-medium leading-[2rem]">
            Desde Inoxilab nos preocupamos por brindarte una experiencia de
            usuario fluida y eficiente. Usando herramientas avanzadas de
            análisis obtenemos datos relevantes que te permitiran tomar mejores
            decisiones.
          </p>
          <ul className="mt-7 space-y-2 text-gray-800">
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="mr-2 text-green-500" /> Datos relevantes
            </li>
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="mr-2 text-green-500" /> Menores costos
            </li>
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="mr-2 text-green-500" /> Mejores
              resultados
            </li>
          </ul>
          <button className="mt-8 px-8 py-3 bg-gray-100 text-gray-800 font-semibold rounded-full hover:bg-blue-800 transition-all duration-200 hover:text-white">
            Contáctanos &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsFeature;

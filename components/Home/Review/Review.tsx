'use client'
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Review = () => {
  return (
    <div className="pt-16 pb-16 bg-[#fcf6fa]" id="reviews">
      <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        Nuestros clientes nos recomiendan
      </h1>
      <div className="mt-20 w-[90%] md:w-[80%] mx-auto">
        <Carousel
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          infinite={true}
          responsive={responsive}
          showDots={true}
        >
            <ReviewCard name="Nestor" image="/images/avatar.png" description="Muy contento con la pagina de Bahia Foton, me ayudo a implementar la web de mi empresa y aumentaron la visibilidad de mi negocio." />
            <ReviewCard name="Gerardo" image="/images/avatar.png" description="Desarrollaron la aplicación para los torneos de Tenis de mesa de ABTM. Me facilitaron el calculo de estadisticas y la realizacion de graficos y le agregaron valor a los torneos presenciales"/>
            <ReviewCard name="Carlos" image="/images/avatar.png" description="Diseñaron un dashboard de Facturación como herramienta para las empresas, que permite ver ventas actualizar stock y demas tareas. Recomendados!"/>
        </Carousel>
      </div>
    </div>
  );
};

export default Review;

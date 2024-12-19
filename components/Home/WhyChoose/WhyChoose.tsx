import React from "react";
import WhyChooseCard from "./WhyChooseCard";

const WhyChoose = () => {
  return (
    <div className="pt-16 pb-16" id="whychoose">
      <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        Porque elegirnos
      </h1>
      <div className="mt-20 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <WhyChooseCard
            image="/images/i1.png"
            title="Atención personalizada"
            description="Ofrecemos atención personalizada para cada proyecto, adaptándonos a tus necesidades específicas."
          />
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
          <WhyChooseCard
            image="/images/i2.png"
            title="Soluciones personalizadas"
            description="Ofrecemos soluciones personalizadas para cada proyecto, adaptándonos a tus necesidades específicas."
          />
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200">
          <WhyChooseCard
            image="/images/i3.png"
            title="Seguridad garantizada"
            description="Garantizamos la seguridad de tus datos y la confidencialidad de tu información."
          />
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="300">
          <WhyChooseCard
            image="/images/i4.png"
            title="Soporte preferencial"
            description="Ofrecemos soporte preferencial para tus proyectos, asegurandonos que todo funcione sin problemas luego de la implementación."
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;

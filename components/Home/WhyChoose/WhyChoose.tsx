import React from "react";
import WhyChooseCard from "./WhyChooseCard";

const WhyChoose = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        Porque elegirnos
      </h1>
      <div className="mt-20 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        <div>
          <WhyChooseCard
            image="/images/i1.png"
            title="Soluciones personalizadas"
            description="Ofrecemos soluciones personalizadas para cada proyecto, adaptándonos a tus necesidades específicas."
          />
        </div>
        <div>
          <WhyChooseCard
            image="/images/i2.png"
            title="Soluciones personalizadas"
            description="Ofrecemos soluciones personalizadas para cada proyecto, adaptándonos a tus necesidades específicas."
          />
        </div>
        <div>
          <WhyChooseCard
            image="/images/i3.png"
            title="Soluciones personalizadas"
            description="Ofrecemos soluciones personalizadas para cada proyecto, adaptándonos a tus necesidades específicas."
          />
        </div>
        <div>
          <WhyChooseCard
            image="/images/i4.png"
            title="Soluciones personalizadas"
            description="Ofrecemos soluciones personalizadas para cada proyecto, adaptándonos a tus necesidades específicas."
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;

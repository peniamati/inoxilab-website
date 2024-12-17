import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  image: string;
  description: string;
};

const WhyChooseCard = ({ title, image, description }: Props) => {
  return (
    <div>
      <Image
        src={image}
        alt={title}
        width={80}
        height={80}
        className="object-contain mx-auto"
      />
      <h1 className="text-center text-lg mt-5 mb-5 font-semibold text-gray-800">{title}</h1>
      <p className="text-gray-600 text-center font-medium text-sm mb-7">{description}</p>
    </div>
  );
};

export default WhyChooseCard;

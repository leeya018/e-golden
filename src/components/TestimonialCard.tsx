import Image from "next/image";
import React from "react";

type TestimonialCardProps = {
  image: string;
  name: string;
  quote: string;
};
const TestimonialCard = ({ image, name, quote }: TestimonialCardProps) => {
  return (
    <div className="flex flex-col items-center p-4 max-w-sm mx-auto">
      <Image
        className="rounded-full mb-4 h-20 w-20"
        alt={name}
        width={80}
        height={80}
        src={image}
      />

      <p className="text-sm text-center text-gray-600 mb-4">"{quote}"</p>
      <p className="font-semibold text-lg text-center">{name}</p>
    </div>
  );
};

export default TestimonialCard;

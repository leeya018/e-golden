import React, { useState } from "react";
import Image from "next/image";

type ServiceCardProps = {
  title: string;
  description: string[];
  imageUrl: string;
  onClick: any;
};

export default function ServiceCard({
  title,
  description,
  imageUrl,
  onClick,
}: ServiceCardProps) {
  const [expanded, setExpanded] = useState(false);

  const handleReadMoreClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`relative border border-yellow-700 ${
        expanded ? "h-auto" : "h-[500px]"
      } overflow-hidden rounded-lg shadow-lg pb-2 transition-all duration-300`}
    >
      <Image
        className="w-full h-1/2"
        alt={title}
        width={500}
        height={500}
        src={imageUrl}
      />
      <div className="p-2 pb-4">
        <h2 className="mb-5 text-xl font-bold">{title}</h2>
        <ul className="flex flex-col gap-2">
          {description.map((item, key) => (
            <li key={key} className="list-disc list-inside">
              {item}
            </li>
          ))}
        </ul>

        <button
          className="mt-4 bg-yellow-700 text-white py-2 px-4 rounded"
          onClick={handleReadMoreClick}
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
        <button
          className="mt-4 bg-yellow-700 text-white py-2 px-4 rounded"
          onClick={onClick}
        >
          to service
        </button>
      </div>
    </div>
  );
}

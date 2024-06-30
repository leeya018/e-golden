import React, { useState } from "react";
import Image from "next/image";
import { languageStore } from "@/mobx/languageStore";

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
  const { translations } = languageStore;

  return (
    <div
      className={`relative border border-gold leading-7 overflow-hidden rounded-lg shadow-lg pb-2 transition-all duration-300`}
    >
      <Image
        className="w-full h-6/10"
        alt={title}
        width={500}
        height={500}
        src={imageUrl}
      />
      <div className="p-3">
        <h2 className=" text-xl font-semibold my-3 line-clamp-1">{title}</h2>
        <div className="flex flex-col gap-2 line-clamp-3">{description}</div>

        <button
          className="mt-4 bg-gold text-white py-2 px-4 rounded"
          onClick={onClick}
        >
          {translations.servicesMain.buttonTxtService}
        </button>
      </div>
    </div>
  );
}

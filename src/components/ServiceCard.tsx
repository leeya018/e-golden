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
        className=" object-cover"
        layout="responsive"
        objectFit="cover"
        alt={title}
        width={500}
        height={500}
        src={imageUrl}
      />
      <div className="p-3 h-[22rem] flex flex-col">
        <h2 className="text-xl font-semibold my-3">{title}</h2>

        <div className="flex-1">{description[0]}</div>

        <button
          className="mt-auto bg-gold text-white 
           rounded"
          onClick={onClick}
        >
          {translations.servicesMain.buttonTxtService}
        </button>
      </div>
    </div>
  );
}

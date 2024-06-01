"use client";
import React, { useState } from "react";
import { languageStore } from "@/mobx/languageStore";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import { useParams } from "next/navigation";
import ContactForm from "@/components/ContactForm";
import { Service } from "@/interfaces/Service";

const ServicePage = () => {
  const { translations } = languageStore;

  const params = useParams();
  const { id } = params as { id: string };

  if (!id) {
    throw new Error("id is not defined");
  }

  console.log(id);
  console.log({ ser: toJS(translations.services) });

  const chosenService: Service = translations.services[id];
  if (!chosenService) {
    throw new Error("id does not exist");
  }

  const renderContent = (key: string, content: any) => {
    if (typeof content === "string") {
      return <div className="text-lg mb-4">{content}</div>;
    }

    if (Array.isArray(content)) {
      return (
        <ul className="list-disc list-inside text-lg mb-4">
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    }

    if (typeof content === "object") {
      return (
        <div>
          {Object.entries(content).map(([subKey, subValue]) => (
            <div key={subKey} className="mb-4">
              <h3 className="text-xl font-semibold mb-2">
                {subKey !== "description" &&
                  subKey !== "label" &&
                  subKey.replace(/_/g, " ")}
              </h3>
              {renderContent(subKey, subValue)}
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <main className="flex w-full lg:mx-auto flex-col  bg-gray-100">
      <div className="relative">
        <Image
          className="w-full h-[500px]"
          alt={chosenService.title}
          width={500}
          height={500}
          src={chosenService.imageUrl}
        />
        <div className="z-10 center-absolute title text-white ">
          {chosenService.title}
        </div>
      </div>
      <div className="px-10 mt-7">
        {Object.entries(chosenService.details).map(([key, value]) => (
          <div key={key} className="mb-8">
            <h2 className="text-3xl font-bold mb-4">{value.label}</h2>
            {renderContent(key, value)}
          </div>
        ))}
      </div>
      <ContactForm />
    </main>
  );
};

export default observer(ServicePage);

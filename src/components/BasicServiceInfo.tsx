"use client";
import React, { useState } from "react";
import { languageStore } from "@/mobx/languageStore";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import { useParams } from "next/navigation";
import ContactForm from "@/components/ContactForm";
import { Service } from "@/interfaces/Service";
import Link from "next/link";

type BasicServiceInfoProps = {
  serivceId: string;
};
const BasicServiceInfo = ({ serivceId }: BasicServiceInfoProps) => {
  const { translations } = languageStore;

  if (!serivceId) {
    throw new Error("serivceId is not defined");
  }

  console.log(serivceId);
  console.log({ ser: toJS(translations.services) });

  const chosenService: Service = translations.services[serivceId];
  if (!chosenService) {
    throw new Error("id does not exist");
  }

  const fromTitleToKey = (title: string) => {
    return title
      .split(" ")
      .join("_")
      .split("")
      .map((l) => l.toLocaleLowerCase())
      .join("");
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
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">{chosenService.title}</h2>
          <div className=" mb-4">{chosenService.description}</div>
          <ul className="list-disc list-inside text-lg mb-4 flex flex-col">
            <h2 className="text-3xl font-bold mb-4">Description</h2>

            <div className=" mb-4">{chosenService.details.description}</div>
            <h2 className="text-3xl font-bold my-10">Services</h2>
            {chosenService.details.services.map((service, index) => (
              <>
                <Link
                  key={index}
                  href={`/service/${serivceId}/subSeservice/${service.label}`}
                >
                  <span className="hover:underline">{service.title}</span>
                </Link>
              </>
            ))}
          </ul>
        </div>
      </div>
      <ContactForm />
    </main>
  );
};
export default observer(BasicServiceInfo);

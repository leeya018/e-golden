"use client";

import { languageStore } from "@/mobx/languageStore";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";

import React from "react";

const ServicePage = () => {
  const { translations } = languageStore;
  const params = useParams();
  const { id } = params as { id: string };
  if (!id) {
    throw new Error("id is not defiened");
  }
  console.log(id);
  console.log({ ser: toJS(translations.services) });
  const chosenService = translations.services.find(
    (service: any) => service.id == id
  );
  if (!chosenService) {
    throw new Error("id is not exsists");
  }
  return (
    <main className="flex w-full  lg:w-[80%] lg:mx-auto flex-col ">
      <h1 className="text-5xl  font-semibold text-center mb-6">
        {chosenService.title}
      </h1>
      <ul className="flex flex-col gap-2">
        {chosenService.description.map((item: any, key: number) => (
          <li key={key} className="list-disc list-inside ">
            {" "}
            {item}
          </li>
        ))}
      </ul>

      <Image
        className="rounded-md  mb-4 h-[500px] w-[500px] mx-auto mt-10"
        alt={chosenService.title}
        width={500}
        height={500}
        src={chosenService.imageUrl}
      />
    </main>
  );
};

export default observer(ServicePage);

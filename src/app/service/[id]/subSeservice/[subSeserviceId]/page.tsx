"use client";
import { Service } from "@/interfaces/Service";
import { SubService } from "@/interfaces/SubService";
import { languageStore } from "@/mobx/languageStore";
import { useParams } from "next/navigation";
import React from "react";

export default function VisaPage() {
  const params = useParams();
  const { translations } = languageStore;

  const { id, subSeserviceId } = params as {
    id: string;
    subSeserviceId: string;
  };

  const info: SubService = translations.services[id].details.services.find(
    (s: SubService) => s.label === subSeserviceId
  );
  if (!info) {
    throw new Error(`${subSeserviceId} subSeservice id does not exists`);
  }

  return (
    <main className="flex w-full lg:mx-auto flex-col  bg-gray-100">
      {/* visa page : {id} and the visa id {subSeserviceId} */}
      <div className="px-10 mt-7">
        <h1 className="title-left">{info.title}</h1>
        <div className="text">{info.description}</div>
      </div>
    </main>
  );
}

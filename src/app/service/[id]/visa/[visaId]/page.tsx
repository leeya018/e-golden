"use client";
import { languageStore } from "@/mobx/languageStore";
import { useParams } from "next/navigation";
import React from "react";

type VisaOption = {
  label: string;
  title: string;
  description: string;
};
export default function VisaPage() {
  const params = useParams();
  const { translations } = languageStore;

  const { id, visaId } = params as { id: string; visaId: string };

  const info: VisaOption = translations.services[
    id
  ].details.residency_permits.options.find(
    (option: VisaOption) => option.label === visaId
  );
  if (!info) {
    throw new Error(`${visaId} id option does not exists`);
  }

  return (
    <main className="flex w-full lg:mx-auto flex-col  bg-gray-100">
      {/* visa page : {id} and the visa id {visaId} */}
      <div className="px-10 mt-7">
        <h1 className="title">{info.title}</h1>
        <div className="text-lg">{info.description}</div>
      </div>
    </main>
  );
}

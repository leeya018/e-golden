"use client";
import { StepOption } from "@/interfaces/StepOption";
import { languageStore } from "@/mobx/languageStore";
import { useParams } from "next/navigation";
import React from "react";

export default function VisaPage() {
  const params = useParams();
  const { translations } = languageStore;

  const { id, stepId } = params as { id: string; stepId: string };

  const info: StepOption = translations.services[id].details.steps.find(
    (option: StepOption) => option.label === stepId
  );
  if (!info) {
    throw new Error(`${stepId} id option does not exists`);
  }

  return (
    <main className="flex w-full lg:mx-auto flex-col  bg-gray-100">
      {/* visa page : {id} and the visa id {stepId} */}
      <div className="px-10 mt-7">
        <h1 className="title-left">{info.title}</h1>
        <div className="text">{info.description}</div>
      </div>
    </main>
  );
}

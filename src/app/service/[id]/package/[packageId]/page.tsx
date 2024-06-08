"use client";
import { languageStore } from "@/mobx/languageStore";
import { toJS } from "mobx";
import { useParams } from "next/navigation";
import React from "react";

type Package = {
  title: string;
  label: string;
  description?: string;
  services: string[];
};
export default function PackagePage() {
  const params = useParams();
  const { translations } = languageStore;

  const { id, packageId } = params as { id: string; packageId: string };

  console.log("===");
  console.log(packageId);
  console.log(toJS(translations.services[id].details.packages));
  const info: Package = translations.services[id].details.packages[packageId];
  if (!info) {
    throw new Error(`${packageId} id  does not exists`);
  }

  return (
    <main className="flex w-full lg:mx-auto flex-col  bg-gray-100">
      {/* visa page : {id} and the visa id {packageId} */}
      <div className="px-10 mt-7">
        <h1 className="title-left">{info.title}</h1>
        <div className="">{info.description}</div>
        <ul className="list-disc list-inside text-lg mb-6 text">
          {info.services &&
            info.services.map((service) => (
              <li key={service} className="mb-2 ">
                <strong className="font-medium capitalize">{service}</strong>
              </li>
            ))}
        </ul>
      </div>
    </main>
  );
}

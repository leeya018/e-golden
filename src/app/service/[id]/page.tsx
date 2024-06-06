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
import { StepOption } from "@/interfaces/StepOption";

const residency_relocation = "residency_relocation";
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
            <h2 className="text-3xl font-bold my-10">Services</h2>
            {chosenService.details.services.map((service, index) => (
              <>
                <Link
                  key={index}
                  href={`/service/${id}/subSeservice/${service.label}`}
                >
                  <span className="hover:underline">{service.title}</span>
                </Link>
              </>
            ))}
          </ul>
          <div>
            {id === residency_relocation && (
              <RelocationServices details={chosenService.details} />
            )}
          </div>
        </div>
      </div>
      <ContactForm />
    </main>
  );
};
export default observer(ServicePage);

type RelocationServicesPorps = {
  details: any;
};
const RelocationServices: React.FC = ({ details }: RelocationServicesPorps) => {
  // const {red_package,red_package} = details.packages

  // const fromTitleToKey = (title: string) => {
  //   return title
  //     .split(" ")
  //     .join("_")
  //     .split("")
  //     .map((l) => l.toLocaleLowerCase())
  //     .join("");
  // };
  return (
    <div className="p-6">
      <div className="mb-6">
        {/* <h2 className="text-2xl font-bold mb-4">
          {details.relocation_to_portugal.label}
        </h2>
        <p>{details.relocation_to_portugal.description}</p> */}
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">{"steps"}</h3>
        <ul className="list-disc list-inside">
          {details.steps.map((step: StepOption, index: number) => (
            <li key={index}>
              <Link
                href={`/service/${residency_relocation}/step/${step.label}`}
              >
                <span className="hover:underline">{step.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Packages </h3>
        <ul className="mb-6 list-disc list-inside">
          <li>
            <Link
              href={`/service/${residency_relocation}/package/${details.packages.red_package.label}`}
            >
              <span className="hover:underline">
                {details.packages.red_package.title}
              </span>
            </Link>
          </li>

          <li>
            <Link
              href={`/service/${residency_relocation}/package/${details.packages.golden_package.label}`}
            >
              <span className="hover:underline">
                {details.packages.golden_package.title}
              </span>
            </Link>
          </li>
          <li>
            <Link
              href={`/service/${residency_relocation}/package/${details.packages.custom_package.label}`}
            >
              <span className="hover:underline">
                {details.packages.custom_package.title}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

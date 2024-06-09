"use client";
import React, { useState } from "react";
import { languageStore } from "@/mobx/languageStore";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import { useParams } from "next/navigation";
import ContactForm from "@/components/ContactForm";
import { useRouter } from "next/navigation";

import { Service } from "@/interfaces/Service";
import Link from "next/link";
import RelocationServices from "@/components/RelocationServices";
import { residency_relocation_name } from "@/util";

const ServicePage = () => {
  const { translations } = languageStore;
  const router = useRouter();

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
    <section className="flex w-full lg:mx-auto flex-col  bg-gray-100">
      <div className="relative">
        <Image
          className="w-full h-[600px] object-fill bg-center"
          alt={chosenService.title}
          width={500}
          height={500}
          src={chosenService.imageUrl}
        />
        <div className="z-10 center-absolute title-image shadow-xl text-white ">
          {chosenService.title}
        </div>
      </div>
      <div className="px-10 mt-7">
        <div className="mb-8">
          <h2 className="title-left">{chosenService.title}</h2>
          <div className=" mb-4 text">{chosenService.description}</div>
          <ul className="list-disc  list-inside text-lg mb-4 flex flex-col">
            <h2 className="text-3xl font-semibold my-10">Services</h2>
            {chosenService.details.services.map((service, index) => (
              <>
                <Link
                  key={index}
                  href={`/service/${id}/subSeservice/${service.label}`}
                >
                  <span className="hover:underline text">{service.title}</span>
                </Link>
              </>
            ))}
          </ul>
          <div>
            {id === residency_relocation_name && (
              <RelocationServices details={chosenService.details} />
            )}
          </div>
        </div>
      </div>
      <ContactForm />
    </section>
  );
};
export default observer(ServicePage);

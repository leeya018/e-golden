"use client";
import { Service } from "@/interfaces/Service";
import { SubService } from "@/interfaces/SubService";
import { languageStore } from "@/mobx/languageStore";
import { convertToBiggerLetters } from "@/util";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

export default function VisaPage() {
  const params = useParams();
  const { translations } = languageStore;

  const { id, subSeserviceId } = params as {
    id: string;
    subSeserviceId: string;
  };

  const info: SubService =
    translations.services[id].details.services[subSeserviceId];
  if (!info) {
    throw new Error(`${subSeserviceId} subSeservice id does not exists`);
  }

  return (
    <main className="flex w-full lg:mx-auto flex-col  bg-gray-100 ">
      <div className="relative">
        <Image
          className="w-full h-[600px] object-fill bg-center"
          alt={"About Us"}
          width={500}
          height={500}
          src={info.imageUrl}
        />

        <div className="z-10 center-absolute title-image shadow-xl text-white ">
          {convertToBiggerLetters(info.titleImg)}
        </div>
      </div>
      {/* <div>etsrnietsrnie</div> */}
      {/* visa page : {id} and the visa id {subSeserviceId} */}
      <div className="px-10 mt-7 side-padding">
        <h1 className="title">{info.title}</h1>
        <div className="text text-middle flex  flex-col">
          {info.description.map((desc, key) => (
            <p className="mb-5" key={key}>
              {desc}
            </p>
          ))}
        </div>

        {info.services && (
          <>
            <div className="sub-title">Our {info.title} Services Include:</div>
            <ul className="text">
              {(info.services as string[]).map((service, key) => (
                <li className="list-disc" key={key}>
                  {service}
                </li>
              ))}
            </ul>
          </>
        )}

        {info.registrations && (
          <>
            <div className="sub-title">
              Our {info.title} Registration Include:
            </div>
            <ul className="text">
              {(info.registrations as string[]).map((registration, key) => (
                <li className="list-disc" key={key}>
                  {registration}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </main>
  );
}

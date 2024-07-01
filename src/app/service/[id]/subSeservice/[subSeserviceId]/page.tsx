"use client";
import { Service } from "@/interfaces/Service";
import { SubService } from "@/interfaces/SubService";
import { languageStore } from "@/mobx/languageStore";
import { convertToBiggerLetters } from "@/util";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

export default function SubservicePage() {
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
      </div>
      <div className="px-10 mt-7 side-padding">
        <div className="title">{info.title}</div>
        <div className="text text-middle flex  flex-col">
          {info.description.map((desc, key) => {
            return (
              <p className="mb-5" key={key}>
                {desc}
              </p>
            );
          })}
        </div>

        {info.services && (
          // <div className="flex flex-col items-center  border-2 rounded-md border-gold shadow-2xl bg-gradient-to-b from-gray to-black ">
          // <div className="bg-gray-100 p-10 flex justify-center">
          //   <div className="border-2 rounded-md border-gold shadow-2xl bg-white p-6">
          //     <h2 className="text-xl font-semibold mb-4">Shadow Box</h2>
          //     <p className="text-gray-700">
          //       This is a box with a nice shadow effect using Tailwind CSS.
          //     </p>
          //   </div>
          // </div>
          <div
            className="mt-10 flex flex-col items-center
           border-2 rounded-md border-gold shadow-2xl p-10  "
          >
            <div className="sub-title ">Our {info.title} Services Include:</div>
            <ul className="text">
              {(info.services as string[]).map((service, key) => {
                const [first, second] = service.split(":");

                return (
                  <li className="list-disc" key={key}>
                    <span className="font-semibold ">{first}:</span>
                    <span className="">{second}</span>
                  </li>
                );
              })}
            </ul>
          </div>
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

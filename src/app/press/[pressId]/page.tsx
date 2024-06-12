"use client";

import { languageStore } from "@/mobx/languageStore";
import { toJS } from "mobx";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

export default function PressPage() {
  const params = useParams();
  const { translations } = languageStore;

  const { pressId } = params as { pressId: string };

  console.log("===");
  console.log(pressId);
  const pressItem = translations.press.list[pressId];
  // const pressItem: PressCardT = translations.press.find(
  //   (p) => p.title === pressId
  // );
  if (!pressItem) {
    throw new Error(`${pressId} id  does not exists`);
  }

  return (
    <section className="flex w-full lg:mx-auto flex-col  bg-gray-100">
      <div className="relative">
        <Image
          className="w-full h-[600px] object-fill bg-center"
          alt={pressItem.title}
          width={500}
          height={500}
          src={pressItem.imageUrl}
        />
        <div className="z-10 center-absolute title-image shadow-xl text-white ">
          {pressItem.title}
        </div>
      </div>

      <div className="mb-8 px-10 mt-7">
        <h2 className="title-left">{pressItem.title}</h2>
        <div className=" mb-4 text">{pressItem.description}</div>
      </div>
    </section>
  );
}

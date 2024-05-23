"use client";
import { services } from "@/util";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";

import React from "react";

export default function ServicePage() {
  const params = useParams();
  const { id } = params;
  if (!id) {
    throw new Error("id is not defiened");
  }
  console.log(id);
  const chosenService = services.find((service) => service.id == id);
  if (!chosenService) {
    throw new Error("id is not exsists");
  }
  return (
    <main className="flex w-full  lg:w-[80%] lg:mx-auto flex-col ">
      {/* <p>The ID is: {id}</p> */}

      <h1 className="text-5xl  font-semibold text-center mb-6">
        {chosenService.title}
      </h1>
      <ul className="flex flex-col gap-2">
        {chosenService.description.map((item, key) => (
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
}

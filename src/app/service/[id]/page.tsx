"use client";

import { languageStore } from "@/mobx/languageStore";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";

import React, { useState } from "react";

const ServicePage = () => {
  const { translations } = languageStore;

  const params = useParams();
  const { id } = params as { id: string };

  if (!id) {
    throw new Error("id is not defiened");
  }
  console.log(id);
  console.log({ ser: toJS(translations.services) });
  const chosenService = translations.services[id];
  if (!chosenService) {
    throw new Error("id is not exsists");
  }
  const renderContent = (key: string, content: any) => {
    if (typeof content === "string") {
      return <div>{content}</div>;
    }

    if (Array.isArray(content)) {
      return (
        <ul>
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    }

    if (typeof content === "object") {
      return (
        <div>
          {Object.entries(content).map(([subKey, subValue]) => (
            <div key={subKey}>
              <h3 className="title">
                {subKey !== "description" && subKey.replace(/_/g, " ")}
              </h3>
              {renderContent(subKey, subValue)}
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <main className={`flex w-full lg:w-[80%] lg:mx-auto flex-col `}>
      {/* <h1 className="title">{chosenService.title}</h1>
      <ul className="flex flex-col gap-2">
        {chosenService.description.map((item: any, key: number) => (
          <li key={key} className="list-disc list-inside ">
            {" "}
            {item}
          </li>
        ))}
      </ul> */}
      {/* <div>{JSON.stringify(chosenService.details)}</div> */}
      <div>
        {Object.entries(chosenService.details).map(([key, value]) => (
          <div key={key}>
            <h2 className="title">{key.replace(/_/g, " ")}</h2>
            {renderContent(key, value)}
          </div>
        ))}
      </div>

      <Image
        className="rounded-md mb-4 h-[500px] w-[500px] mx-auto mt-10"
        alt={chosenService.title}
        width={500}
        height={500}
        src={chosenService.imageUrl}
      />
    </main>
  );
};

export default observer(ServicePage);

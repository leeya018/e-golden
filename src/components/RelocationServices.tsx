"use client";
import React, { useState } from "react";

import Link from "next/link";
import { StepOption } from "@/interfaces/StepOption";
import { observer } from "mobx-react-lite";
import { residency_relocation_name } from "@/util";
import Image from "next/image";
import { languageStore } from "@/mobx/languageStore";

type RelocationServicesPorps = {
  details: any;
};
const RelocationServices = ({ details }: RelocationServicesPorps) => {
  // const fromTitleToKey = (title: string) => {
  //   return title
  //     .split(" ")
  //     .join("_")
  //     .split("")
  //     .map((l) => l.toLocaleLowerCase())
  //     .join("");
  // };
  const { translations } = languageStore;
  const steps = translations.services["residency_relocation"].details.steps;
  return (
    <div className="mt-20">
      <div className="mb-6">
        <h3 className="title">{steps.title}</h3>
        <Image
          className="mx-auto object-fill bg-center mt-20"
          alt={steps.title}
          width={500}
          height={500}
          src={"/images/steps.png"}
        />
        {/* <ul className="list-disc list-inside text">
          {details.steps.map((step: StepOption, index: number) => (
            <li key={index}>
              <Link
                href={`/service/${residency_relocation_name}/step/${step.label}`}
              >
                <span className="hover:underline">{step.title}</span>
              </Link>
            </li>
          ))}
        </ul> */}
      </div>
      <div>
        <Link href={`/service/${residency_relocation_name}/packages`}>
          <div className="hover:underline flex justify-center text-4xl my-20 ">
            <p>
              {details.packages.title}{" "}
              <span className="text-gold"> E-golden</span>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default observer(RelocationServices);

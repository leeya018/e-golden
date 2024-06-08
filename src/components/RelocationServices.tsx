"use client";
import React, { useState } from "react";

import Link from "next/link";
import { StepOption } from "@/interfaces/StepOption";
import { observer } from "mobx-react-lite";
import { residency_relocation_name } from "@/util";

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
  return (
    <div className="">
      <div className="mb-6">
        <h3 className="sub-title">{"steps"}</h3>
        <ul className="list-disc list-inside text">
          {details.steps.map((step: StepOption, index: number) => (
            <li key={index}>
              <Link
                href={`/service/${residency_relocation_name}/step/${step.label}`}
              >
                <span className="hover:underline">{step.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="sub-title">Packages </h3>
        <ul className="mb-6 list-disc list-inside text">
          <li>
            <Link
              href={`/service/${residency_relocation_name}/package/${details.packages.red_package.label}`}
            >
              <span className="hover:underline">
                {details.packages.red_package.title}
              </span>
            </Link>
          </li>

          <li>
            <Link
              href={`/service/${residency_relocation_name}/package/${details.packages.golden_package.label}`}
            >
              <span className="hover:underline">
                {details.packages.golden_package.title}
              </span>
            </Link>
          </li>
          <li>
            <Link
              href={`/service/${residency_relocation_name}/package/${details.packages.custom_package.label}`}
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

export default observer(RelocationServices);

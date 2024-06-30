"use client";
import React, { useState } from "react";

import Image from "next/image";
import serviceStore from "@/mobx/serviceStore";
import { Package as PackageT } from "@/interfaces/Packages";

function ServicesPage() {
  const packages = serviceStore?.chosenService?.details?.packages;
  if (!packages) throw new Error("packages are not exists");
  const [selectedPlan, setSelectedPlan] = useState(packages.list[1].label);
  console.log(JSON.stringify(packages));
  return (
    <div className="flex flex-col">
      <h1 className="title ">Our Packages</h1>
      <div className="mt-20 flex flex-col  justify-center gap-10 md:flex-row lg:gap-20">
        <Package
          colorGradient="from-green-900"
          plan={packages.list[0]}
          isChosen={false}
          onSelect={() => setSelectedPlan(packages.list[0].label)}
          selectedPlan={selectedPlan}
        />
        <Package
          colorGradient="from-purple-900"
          plan={packages.list[1]}
          isChosen={true}
          onSelect={() => setSelectedPlan(packages.list[1].label)}
          selectedPlan={selectedPlan}
          isMostPopular={true}
        />
        <Package
          colorGradient="from-blue"
          plan={packages.list[2]}
          isChosen={false}
          onSelect={() => setSelectedPlan(packages.list[2].label)}
          selectedPlan={selectedPlan}
        />
      </div>
    </div>
  );
}

export default ServicesPage;

type PackageProps = {
  plan: PackageT;
  selectedPlan: string;
  isChosen: boolean;
  info?: any;
  isMostPopular?: boolean;
  onSelect: any;
  colorGradient: string;
};
function Package({
  plan,
  selectedPlan,
  isChosen,
  info,
  isMostPopular,
  onSelect,
  colorGradient,
}: PackageProps) {
  return (
    <div
      className={`max-w-sm w-full bg-gray-800 text-white rounded-lg shadow-md relative overflow-hidden cursor-pointer ${
        selectedPlan === plan.label && "scale-110"
      }`}
      onClick={onSelect}
    >
      <div
        className={`absolute top-0 left-0 right-0 bg-gradient-to-b ${colorGradient} to-black h-40`}
      ></div>
      {isMostPopular && (
        <div className="absolute top-2 right-2 bg-gold text-white text-xs font-semibold px-2 py-1 rounded">
          Most popular
        </div>
      )}
      <div className="relative p-6">
        <div className="flex items-center mb-4">
          <div className="w-20 h-12 rounded-full bg-purple-600 flex items-center justify-center">
            <Image
              width={100}
              height={100}
              src={plan.imageUrl}
              alt="Logo"
              className="w-20 h-12 rounded-full"
            />
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-semibold">{plan.title}</h2>
            <p className="text-sm text-gray-400">
              Supercharged crypto tools. Personalized guidance. Market insights.
            </p>
          </div>
        </div>
        {plan.price && (
          <div className="text-3xl font-bold mb-4">
            ${plan.price}
            <span className="text-xl font-normal">/year</span>
          </div>
        )}
        <button className="w-full bg-gold hover:bg-gold text-white font-semibold py-2 px-4 rounded">
          Choose this plan
        </button>
        <ul className="mt-4 space-y-2">
          {(plan.services as string[])?.map((service, key) => (
            <li key={key} className="flex items-center">
              <svg
                className="w-5 h-5 text-gray-400 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M16 6L8 14l-4-4"></path>
              </svg>
              {service}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

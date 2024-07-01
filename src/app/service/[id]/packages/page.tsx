"use client";
import React, { MouseEventHandler, useState } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";
import serviceStore from "@/mobx/serviceStore";
import { Package as PackageT } from "@/interfaces/Package";
import { languageStore } from "@/mobx/languageStore";
import { handleWhatsAppClick } from "@/util";

function ServicesPage() {
  const { translations } = languageStore;

  const packages: PackageT[] | undefined = serviceStore?.chosenService?.details
    ?.packages as PackageT[] | undefined;

  if (!packages) throw new Error("packages are not exists");
  const packageInfo = translations.packageInfo;
  const [selectedPlan, setSelectedPlan] = useState(packages[1].label);
  console.log(JSON.stringify(packages));
  return (
    <div className="mx-5 flex flex-col items-center ">
      <h1 className="title ">Our Packages</h1>
      <div className="mt-20 flex flex-col justify-center gap-10 md:flex-row lg:gap-20">
        <Package
          onClick={handleWhatsAppClick}
          // onClick={() => router.push(`/payment/${packages[0].label}`)}
          colorGradient="from-green-900"
          plan={packages[0]}
          btnTitle={packageInfo.btnChoosePlan}
          onSelect={() => setSelectedPlan(packages[0].label)}
          selectedPlan={selectedPlan}
        />
        <Package
          onClick={handleWhatsAppClick}
          // onClick={() => router.push(`/payment/${packages[0].label}`)}
          colorGradient="from-purple-900"
          plan={packages[1]}
          onSelect={() => setSelectedPlan(packages[1].label)}
          btnTitle={packageInfo.btnChoosePlan}
          selectedPlan={selectedPlan}
          isMostPopular={true}
        />
        <Package
          onClick={handleWhatsAppClick}
          colorGradient="from-blue"
          plan={packages[2]}
          btnTitle={packageInfo.btnContactUs}
          onSelect={() => setSelectedPlan(packages[2].label)}
          selectedPlan={selectedPlan}
        />
      </div>
    </div>
  );
}

export default ServicesPage;

type PackageProps = {
  onClick: () => void;
  btnTitle: string;
  plan: PackageT;
  selectedPlan: string;
  isMostPopular?: boolean;
  onSelect: any;
  colorGradient: string;
};
function Package({
  onClick,
  btnTitle,
  plan,
  selectedPlan,
  isMostPopular,
  onSelect,
  colorGradient,
}: PackageProps) {
  return (
    <div
      className={`max-w-sm w-full bg-gray-800 text-white rounded-lg shadow-md relative
         overflow-hidden cursor-pointer ${
           selectedPlan === plan.label && "scale-105"
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
      <div className="relative p-6 mt-2">
        <div className="flex items-center gap-4  mb-4">
          <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
            <Image
              width={100}
              height={100}
              src={plan.imageUrl}
              alt="Logo"
              className="w-12 h-12 rounded-full"
            />
          </div>

          <h2 className="text-xl font-semibold">{plan.title}</h2>
        </div>

        <button
          onClick={onClick}
          className="w-full bg-gold hover:bg-gold text-white 
          font-semibold py-2 px-4 rounded border-none"
        >
          {btnTitle}
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

"use client";
import React from "react";
import { residency_relocation_name } from "@/util";
import ImageCard from "@/components/ImageCard";
import { useRouter } from "next/navigation";
import serviceStore from "@/mobx/serviceStore";
import { observer } from "mobx-react-lite";

function ServicesPage() {
  const router = useRouter();

  const details = serviceStore?.chosenService?.details;
  return (
    <div className="mx-auto w-full mt-44 px-10">
      <h1 className="title ">Packages</h1>
      <ul className="mb-6 list-none list-inside text flex   justify-between w-full mx-auto">
        <li>
          <ImageCard
            title={details.packages.red_package.title}
            services={details.packages.red_package.services}
            imageUrl={details.packages.red_package.imageUrl}
          />
        </li>

        <li>
          <ImageCard
            title={details.packages.golden_package.title}
            services={details.packages.golden_package.services}
            imageUrl={details.packages.golden_package.imageUrl}
          />
        </li>

        <li>
          <ImageCard
            title={details.packages.custom_package.title}
            services={details.packages.custom_package.services}
            imageUrl={details.packages.custom_package.imageUrl}
          />
        </li>
      </ul>
    </div>
  );
}

export default observer(ServicesPage);

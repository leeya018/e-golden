"use client";
import React from "react";
import { residency_relocation_name } from "@/util";
import ImageCard from "@/components/ImageCard";
import { useRouter } from "next/navigation";
import serviceStore from "@/mobx/serviceStore";
import { observer } from "mobx-react-lite";
import { Package } from "@/interfaces/Packages";

function ServicesPage() {
  const router = useRouter();

  const details = serviceStore?.chosenService?.details;
  if (!details) {
    throw new Error("details is not defiend");
  }
  const pList = details?.packages?.list;
  if (!pList) {
    throw new Error("list is not defiend");
  }
  return (
    <div className="mx-auto w-full mt-44 px-10">
      <h1 className="title ">Packages</h1>
      <ul className="mb-6 list-none list-inside text flex   justify-between w-full mx-auto">
        {pList.map((p: Package, key: number) => (
          <li key={key}>
            <ImageCard
              title={p.title}
              services={p.services}
              imageUrl={p.imageUrl}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default observer(ServicesPage);

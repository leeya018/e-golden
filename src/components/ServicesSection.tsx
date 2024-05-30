import React from "react";
import { useRouter } from "next/navigation";
import ServiceCard from "./ServiceCard";
import { languageStore } from "@/mobx/languageStore";
import { observer } from "mobx-react-lite";

const ServicesSection = () => {
  const router = useRouter();
  const { translations } = languageStore;

  return (
    <section className="min-h-screen flex flex-col ">
      <div className="flex justify-center ">
        <h1 className="title">{translations.servicesMain.sectionTitle}</h1>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {Object.entries(translations.services).map(([key, value]) => (
          <ServiceCard
            key={key}
            title={value.title}
            description={value.description}
            imageUrl={value.imageUrl}
            onClick={() => {
              router.push(`/service/${key}`);
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default observer(ServicesSection);

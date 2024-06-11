import React from "react";
import { useRouter } from "next/navigation";
import ServiceCard from "./ServiceCard";
import { languageStore } from "@/mobx/languageStore";
import { observer } from "mobx-react-lite";
import { Service } from "@/interfaces/Service";

const ServicesSection = () => {
  const router = useRouter();
  const { translations } = languageStore;

  return (
    <section className=" flex flex-col mt-10 ">
      <div className="flex justify-center  title text-g">
        <h1 className="  ">{translations.servicesMain.sectionTitle}</h1>&nbsp;
        <span className="text-gold"> E-golden</span>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-20">
        {Object.entries(translations.services as Service[]).map(
          ([key, value]) => (
            <ServiceCard
              key={key}
              title={value.title}
              description={value.description}
              imageUrl={value.imageUrl}
              onClick={() => {
                router.push(`/service/${key}`);
              }}
            />
          )
        )}
      </div>
    </section>
  );
};

export default observer(ServicesSection);

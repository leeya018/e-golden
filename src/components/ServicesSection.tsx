import React from "react";
import { useRouter } from "next/navigation";
import ServiceCard from "./ServiceCard";
import { services } from "@/util";

export default function ServicesSection() {
  const router = useRouter();

  return (
    <section className="h-screen flex flex-col  ">
      <h1 className="text-5xl mt-20 font-semibold text-center mb-6">
        Welcome to Our Service Portal
      </h1>
      <div className="flex justify-center mb-20 text-lg mt-10">
        From Relocation to Investments Your One Stop Shop Services With E-golden
      </div>

      <div className="flex justify-center text-4xl font-semibold mb-10">
        Services
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            onClick={() => router.push(service.location)}
          />
        ))}
      </div>
    </section>
  );
}

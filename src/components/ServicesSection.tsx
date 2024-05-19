import React from "react";
import { useRouter } from "next/navigation";
import ServiceCard from "./ServiceCard";
import { services } from "@/util";

export default function ServicesSection() {
  const router = useRouter();

  return (
    <div className="flex justify-between gap-4 ">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          title={service.title}
          description={service.description}
          onClick={() => router.push(service.location)}
        />
      ))}
    </div>
  );
}

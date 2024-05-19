import React from "react";
import ServiceCard from "./ServiceCard";
import { services } from "@/util";

export default function ServicesSection() {
  return (
    <div className="flex justify-between gap-2 ">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
}

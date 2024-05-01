import React from "react";
import ServiceCard from "./ServiceCard";
import { services } from "@/util";

export default function ServicesSection() {
  return (
    <div className="grid grid-cols-2 gap-4 w-4/5 mx-auto">
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

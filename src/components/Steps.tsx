import { StepsContent } from "@/interfaces/StepsContent";
import React from "react";

type StepsProps = {
  steps: StepsContent;
};

export default function Steps({ steps }: StepsProps) {
  return (
    <>
      {Object.entries(steps).map(([key, value]) => (
        <div key={key} id={key} className="mb-8">
          <h2 className="text-3xl font-bold mb-4">{value.title}</h2>
          <div className=" mb-4">{value.content}</div>
        </div>
      ))}
    </>
  );
}

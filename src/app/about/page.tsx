"use client";
import React, { useEffect } from "react";
import { languageStore } from "@/mobx/languageStore";
import { observer } from "mobx-react-lite";

const About: React.FC = () => {
  const { translations } = languageStore;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center ">
      <div className="bg-white  rounded-lg p-8 max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {translations.about.h1}
        </h1>
        <p className="text-gray-700 text-lg mb-4">{translations.about.p1}</p>
        <p className="text-gray-700 text-lg mb-4">{translations.about.p2}</p>
        <p className="text-gray-700 text-lg mb-4">{translations.about.p3}</p>
        <p className="text-gray-700 text-lg">{translations.about.p4}</p>
      </div>
    </div>
  );
};

export default observer(About);

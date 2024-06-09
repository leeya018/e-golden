"use client";
import React, { useEffect } from "react";
import { languageStore } from "@/mobx/languageStore";
import { observer } from "mobx-react-lite";
import Image from "next/image";

const About: React.FC = () => {
  const { translations } = languageStore;

  return (
    <section className="bg-gray-100">
      <div className="relative">
        <Image
          className="w-full h-[600px] object-fill bg-center"
          alt={"About Us"}
          width={500}
          height={500}
          src={translations.about_us.imageUrl}
        />

        <div className="z-10 center-absolute title-image shadow-xl text-white ">
          About Us
        </div>
      </div>
      <div className="px-10 mt-7">
        <h1 className="title-left mb-4">About Us</h1>
        <p className="text mb-6">{translations.about_us.welcome_message}</p>

        <h2 className="sub-title  mb-4">Who We Are</h2>
        <p className="text mb-6">{translations.about_us.who_we_are}</p>

        <h2 className="sub-title mb-4">Our Mission</h2>
        <p className="text mb-6">{translations.about_us.our_mission}</p>

        <h2 className="sub-title mb-4">Our Vision</h2>
        <p className="text mb-6">{translations.about_us.our_vision}</p>

        <h2 className="sub-title mb-4">Our Values</h2>
        <ul className="list-disc list-inside text mb-6">
          {Object.entries(translations.about_us.our_values).map(
            ([key, value]) => (
              <li key={key} className="mb-2">
                <strong className="font-medium capitalize">{key}:</strong>{" "}
                {value}
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
};

export default observer(About);

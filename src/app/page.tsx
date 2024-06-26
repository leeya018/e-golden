"use client";
// pages/index.js
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// import ImagesSection from "@/components/ImagesSection";
import ServicesSection from "@/components/ServicesSection";
import AboutPortugalSection from "@/components/AboutPortugalSection";
import TentemonialList from "@/components/TentemonialList";

import Calender from "@/components/Calender";
import CalenderPopup from "@/components/CalenderPopup";
import Modal from "@/components/Modal";
import { ModalStore } from "@/mobx/modalStore";
import { modals } from "@/util";
import { observer } from "mobx-react-lite";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import PressList from "@/components/PressList";

const Main = observer(() => {
  return (
    <div className="">
      <main className="flex w-full   lg:mx-auto flex-col ">
        <AboutPortugalSection />
        <div className="side-padding ">
          <ServicesSection />
          <TentemonialList />

          {/* <PressList /> */}
        </div>
      </main>
    </div>
  );
});

export default Main;

import { useState } from "react";
import Modal from "./Modal";
import Calender from "./Calender";
import { ModalStore } from "@/mobx/modalStore";
import { modals } from "@/util";
import { languageStore } from "@/mobx/languageStore";
import { observer } from "mobx-react-lite";
import Image from "next/image";

// components/Footer.js
const Footer = () => {
  const { translations } = languageStore;

  const handleWhatsAppClick = () => {
    // const phoneNumber = "+972 54-222-6958"; // Replace with your phone number
    const phoneNumber = process.env.NEXT_PUBLIC_PHONE; // Replace with your phone number
    const message = "Hello, I would like to contact you."; // Optional: default message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <footer className="bg-black text-white mt-10 px-6">
      <div className="container mx-auto  py-10">
        <div className="flex ">
          {/* first */}
          <div className="w-2/5">
            <Image
              alt="logo"
              width={150}
              height={150}
              src={"/images/logo.png"}
            />
          </div>
          {/* second */}
          <div className="w-1/5">
            <h3 className="font-medium text-[18px] leading-[27px] text-white">
              {translations.footer.title}
            </h3>

            <p className="mt-2">{translations.footer.p1}</p>
            <p className="mt-2">{translations.footer.email}</p>
            <p className="mt-2">{translations.footer.phone}</p>
            <p
              className="mt-2 cursor-pointer hover:underline"
              onClick={() => ModalStore.openModal(modals.scedule)}
            >
              {translations.footer.secedule_meeting}
            </p>
          </div>
          {/* third */}
          <div className="w-1/5 ">
            <h3 className="font-medium text-[18px] leading-[27px] text-white">
              {translations.footer.quick_links}
            </h3>
            <ul className="text-gray flex flex-col mt-2 gap-2 ">
              <li className=" font-normal text-[16px] leading-[24px] text-dimWhite hover:text-firehorse_orange cursor-pointer mb-4 hover:text-yellow-500">
                <a href="/services" className="hover:text-gray-300">
                  {" "}
                  {translations.footer.services}
                </a>
              </li>
              <li className=" font-normal text-[16px] leading-[24px] text-dimWhite hover:text-firehorse_orange cursor-pointer mb-4 hover:text-yellow-500">
                <a href="/about" className="hover:text-gray-300">
                  {translations.footer.about_us}
                </a>
              </li>
              <li className=" font-normal text-[16px] leading-[24px] text-dimWhite hover:text-firehorse_orange cursor-pointer mb-4 hover:text-yellow-500">
                <span
                  onClick={() => ModalStore.openModal(modals.contact)}
                  className="hover:text-gray-300 cursor-pointer"
                >
                  {translations.footer.contact}
                </span>
              </li>
            </ul>
          </div>
          {/* forth */}
          <div className="w-1/5">
            <h3 className="font-medium text-[18px] leading-[27px] text-white">
              Follow Us
            </h3>
            <ul className=" text-gray flex flex-col mt-2 gap-2 ">
              <li className=" font-normal text-[16px] leading-[24px] text-dimWhite hover:text-firehorse_orange cursor-pointer mb-4 hover:text-yellow-500">
                <a href="https://facebook.com" className="hover:text-gray-300">
                  {translations.footer.facebook}
                </a>
              </li>
              <li className=" font-normal text-[16px] leading-[24px] text-dimWhite hover:text-firehorse_orange cursor-pointer mb-4 hover:text-yellow-500">
                <a href="https://twitter.com" className="hover:text-gray-300">
                  {translations.footer.twitter}
                </a>
              </li>
              <li className=" font-normal text-[16px] leading-[24px] text-dimWhite hover:text-firehorse_orange cursor-pointer mb-4 hover:text-yellow-500">
                <a href="https://linkedin.com" className="hover:text-gray-300">
                  {translations.footer.linkedIn}
                </a>
              </li>
              <li className=" font-normal text-[16px] leading-[24px] text-white  cursor-pointer mb-4 ">
                <span
                  onClick={handleWhatsAppClick}
                  className="bg-[#14957B] p-2 rounded-md  cursor-pointer"
                >
                  {translations.footer.whatsapp}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-10">
          <p>
            © {new Date().getFullYear()} {translations.footer.reserved}
          </p>
        </div>
      </div>
    </footer>
  );
};
export default observer(Footer);

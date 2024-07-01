import { useState } from "react";
import Modal from "./Modal";
import Calender from "./Calender";
import { ModalStore } from "@/mobx/modalStore";
import { handleWhatsAppClick, modals } from "@/util";
import { languageStore } from "@/mobx/languageStore";
import { observer } from "mobx-react-lite";
import Image from "next/image";

// components/Footer.js
const Footer = () => {
  const { translations } = languageStore;

  return (
    <footer className="bg-black text-white mt-20  side-padding ">
      <div className="flex justify-center items-start md:flex-row flex-col mb-8 w-full border-t-2 py-7">
        {/* first */}
        <div className="flex-[1] flex flex-col justify-start mr-10">
          <Image
            alt="logo"
            width={150}
            height={150}
            className=""
            src={"/images/logo.png"}
          />
          <div className="mt-2 line-clamp-3 font-medium leading-7 pr-10">
            {translations.footer.moto}
          </div>
        </div>
        {/* second */}
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-2">
          {/* second1 */}

          <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h3 className="font-semibold text-2xl leading-7 text-white">
              {translations.footer.title}
            </h3>

            <p className="mt-2 font-normal text-lg leading-[24px]">
              {translations.footer.p1}
            </p>
            <p className="mt-2 font-normal text-lg leading-[24px]">
              {translations.footer.email}
            </p>
            <p className="mt-2 font-normal text-lg leading-[24px]">
              {translations.footer.phone}
            </p>
            <p
              className="mt-2 cursor-pointer hover:underline"
              onClick={() => ModalStore.openModal(modals.scedule)}
            >
              {translations.footer.secedule_meeting}
            </p>
          </div>
          {/* second2 */}
          <div className="flex flex-col ss:my-0 my-4 min-w-[150px] ">
            <h3 className="font-semibold text-2xl leading-7 text-white">
              {translations.footer.quick_links}
            </h3>
            <ul className="text-white flex flex-col mt-2 gap-1 ">
              <li className=" font-normal text-lg leading-[24px] text-dimWhite hover:text-firehorse_orange cursor-pointer mb-4 hover:text-yellow-500">
                <a href="/services" className="hover:text-gray-300">
                  {" "}
                  {translations.footer.services}
                </a>
              </li>
              <li className=" font-normal text-lg leading-[24px] text-dimWhite hover:text-firehorse_orange cursor-pointer mb-4 hover:text-yellow-500">
                <a href="/about" className="hover:text-gray-300">
                  {translations.footer.about_us}
                </a>
              </li>
              <li className=" font-normal text-lg leading-[24px] text-dimWhite hover:text-firehorse_orange cursor-pointer mb-4 hover:text-yellow-500">
                <span
                  onClick={() => ModalStore.openModal(modals.contact)}
                  className="hover:text-gray-300 cursor-pointer"
                >
                  {translations.footer.contact}
                </span>
              </li>
            </ul>
          </div>
          {/* second3 */}
          <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h3 className="font-semibold text-2xl leading-7 text-white">
              {translations.footer.follow_us}
            </h3>
            <ul className=" text-white flex flex-col mt-2 gap-1 ">
              <li className=" font-normal text-lg leading-[24px] text-dimWhite hover:text-firehorse_orange cursor-pointer mb-4 hover:text-yellow-500">
                <a href="https://facebook.com" className="hover:text-gray-300">
                  {translations.footer.facebook}
                </a>
              </li>
              <li className=" font-normal text-lg leading-[24px] text-dimWhite hover:text-firehorse_orange cursor-pointer mb-4 hover:text-yellow-500">
                <a href="https://twitter.com" className="hover:text-gray-300">
                  {translations.footer.twitter}
                </a>
              </li>
              <li className=" font-normal text-lg leading-[24px] text-dimWhite hover:text-firehorse_orange cursor-pointer mb-4 hover:text-yellow-500">
                <a href="https://linkedin.com" className="hover:text-gray-300">
                  {translations.footer.linkedIn}
                </a>
              </li>
              <li className=" font-normal text-lg leading-[24px] text-white  cursor-pointer mb-4 ">
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
      </div>
      <div className="text-lg font-medium mt-10 py-10 pl-16 border-t-2">
        <p>
          © {new Date().getFullYear()} {translations.footer.reserved}
        </p>
      </div>
    </footer>
  );
};
export default observer(Footer);

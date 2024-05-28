import { useState } from "react";
import Modal from "./Modal";
import Calender from "./Calender";
import { ModalStore } from "@/mobx/modalStore";
import { modals } from "@/util";
import { languageStore } from "@/mobx/languageStore";
import { observer } from "mobx-react-lite";

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
    <footer className="bg-black text-white mt-10 ">
      <div className="container mx-auto px-6 py-10">
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-bold">{translations.footer.title}</h3>
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
          <div>
            <h3 className="text-lg font-bold">
              {translations.footer.quick_links}
            </h3>
            <ul>
              <li>
                <a href="/services" className="hover:text-gray-300">
                  {" "}
                  {translations.footer.services}
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-300">
                  {translations.footer.about_us}
                </a>
              </li>
              <li>
                <span
                  onClick={() => ModalStore.openModal(modals.contact)}
                  className="hover:text-gray-300 cursor-pointer"
                >
                  {translations.footer.contact}
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Follow Us</h3>
            <ul className=" flex md:flex-row flex-col  mt-2 gap-3 ">
              <li>
                <a href="https://facebook.com" className="hover:text-gray-300">
                  {translations.footer.facebook}
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="hover:text-gray-300">
                  {translations.footer.twitter}
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" className="hover:text-gray-300">
                  {translations.footer.linkedIn}
                </a>
              </li>
              <li>
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

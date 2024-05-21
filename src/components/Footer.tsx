import { useState } from "react";
import Modal from "./Modal";
import Calender from "./Calender";
import { ModalStore } from "@/mobx/modalStore";
import { modals } from "@/util";

// components/Footer.js
export default function Footer() {
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
            <h3 className="text-lg font-bold">About Us</h3>
            <p className="mt-2">Learn more about our mission and services.</p>
            <p className="mt-2">Email: info@example.com</p>
            <p className="mt-2">Phone: +123 456 7890</p>
            <p
              className="mt-2 cursor-pointer hover:underline"
              onClick={() => ModalStore.openModal(modals.scedule)}
            >
              scedule meeting
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul>
              <li>
                <a href="/services" className="hover:text-gray-300">
                  Services
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Follow Us</h3>
            <ul className="flex mt-2">
              <li>
                <a
                  href="https://facebook.com"
                  className="mr-6 hover:text-gray-300"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="hover:text-gray-300">
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  className="ml-6 hover:text-gray-300"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <span
                  onClick={handleWhatsAppClick}
                  className="ml-6 bg-[#14957B] p-2 rounded-md  cursor-pointer"
                >
                  Whatsapp
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-10">
          <p>© {new Date().getFullYear()} E-Golden. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

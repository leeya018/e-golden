import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ModalStore } from "@/mobx/modalStore";
import { modals } from "@/util";
import LanguageSwitcher from "./LanguageSwitcher";

// components/Header.js
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black text-white p-4 fixed top-0 left-0 right-0">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="logo flex items-center justify-center w-full md:w-auto">
          <Image alt="logo" width={70} height={70} src={"/images/logo.png"} />
        </div>
        <LanguageSwitcher />
        <div className="block md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div className={`hidden md:flex md:items-center `}>
          <Link href="/" className="nav-button">
            Home
          </Link>
          <Link href="/service/1" className="nav-button">
            Residency & Relocation
          </Link>
          <Link href="/service/2" className="nav-button">
            Tax Planning
          </Link>
          <Link href="/service/3" className="nav-button">
            Business
          </Link>
          <Link href="/service/4" className="nav-button">
            Real Estate
          </Link>
          <Link href="/about" className="nav-button">
            About
          </Link>
          <button
            onClick={() => ModalStore.openModal(modals.contact)}
            className="nav-button"
          >
            <p className="text-xl border-2 rounded-md font-bold py-2 px-4 ml-4 relative overflow-hidden">
              <span className="inline-block transform transition-transform duration-100 ease-in-out hover:scale-105">
                Contact
              </span>
            </p>
          </button>
        </div>
      </nav>
      <div className={`fixed inset-0 z-50 flex ${isOpen ? "block" : "hidden"}`}>
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={toggleMenu}
        ></div>
        <div
          className={`fixed right-0 top-0 h-full bg-white shadow-lg p-4 transform transition-transform duration-1000 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ width: "75%" }}
        >
          <button
            className="absolute top-4 right-4 text-black"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <nav className="flex flex-col space-y-8 mt-8 font-md ">
            <Link
              href="/"
              className="text-black text-xl hover:text-gray"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/residency_relocation"
              className="text-black text-xl hover:text-gray"
              onClick={toggleMenu}
            >
              Residency & Relocation
            </Link>
            <Link
              href="/services"
              className="text-black text-xl hover:text-gray"
              onClick={toggleMenu}
            >
              Tax Planning
            </Link>
            <Link
              href="/bussiness"
              className="text-black text-xl hover:text-gray"
              onClick={toggleMenu}
            >
              Business
            </Link>
            <Link
              href="/realestate"
              className="text-black text-xl hover:text-gray"
              onClick={toggleMenu}
            >
              Real Estate
            </Link>
            <Link
              href="/about"
              className="text-black text-xl hover:text-gray"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href=""
              onClick={() => {
                toggleMenu();
                ModalStore.openModal(modals.contact);
              }}
              className="text-black text-xl hover:text-gray"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

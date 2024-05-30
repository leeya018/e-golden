import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ModalStore } from "@/mobx/modalStore";
import { modals } from "@/util";
import LanguageSwitcher from "./LanguageSwitcher";
import { languageStore } from "@/mobx/languageStore";
import { observer } from "mobx-react-lite";

// components/Header.js

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { translations } = languageStore;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black text-white p-4 fixed top-0 left-0 right-0">
      <nav className=" container mx-auto flex justify-between items-center">
        <div className="  ">
          <LanguageSwitcher />
        </div>
        <div className="logo flex items-center justify-center w-full md:w-auto">
          <Image alt="logo" width={70} height={70} src={"/images/logo.png"} />
        </div>
        <Link href="#HowtoRenewthePortugalPassiveIncomeD7Visa">
          <span>Jump Visa red</span>
        </Link>
        <Link href="#how2">
          <span>Jump Visa red</span>
        </Link>
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
            {translations.header.home}
          </Link>
          <Link href={"/service/relocation-residency"} className="nav-button">
            {translations.header.residencyRelocation}
          </Link>
          <Link href={"/service/tax-planning-advice"} className="nav-button">
            {translations.header.taxPlanning}
          </Link>
          <Link href={"/service/business-solutions"} className="nav-button">
            {translations.header.business}
          </Link>
          <Link
            href={"/service/real-estate-investments-management"}
            className="nav-button"
          >
            {translations.header.realEstate}
          </Link>
          <Link href="/about" className="nav-button">
            {translations.header.about}
          </Link>
          <button
            onClick={() => ModalStore.openModal(modals.contact)}
            className="nav-button"
          >
            <p className="text-xl border-2 rounded-md font-bold py-2 px-4 ml-4 relative overflow-hidden">
              <span className="inline-block transform transition-transform duration-100 ease-in-out hover:scale-105">
                {translations.header.contact}
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
              {translations.header.home}
            </Link>
            <Link
              href="/service/relocation-residency"
              className="text-black text-xl hover:text-gray"
              onClick={toggleMenu}
            >
              {translations.header.residencyRelocation}
            </Link>
            <Link
              href="/service/tax-planning-advice"
              className="text-black text-xl hover:text-gray"
              onClick={toggleMenu}
            >
              {translations.header.taxPlanning}
            </Link>
            <Link
              href="/service/business-solutions"
              className="text-black text-xl hover:text-gray"
              onClick={toggleMenu}
            >
              {translations.header.business}
            </Link>
            <Link
              href="/service/real-estate-investments-management"
              className="text-black text-xl hover:text-gray"
              onClick={toggleMenu}
            >
              {translations.header.realEstate}
            </Link>
            <Link
              href="/about"
              className="text-black text-xl hover:text-gray"
              onClick={toggleMenu}
            >
              {translations.header.about}
            </Link>
            <Link
              href=""
              onClick={() => {
                toggleMenu();
                ModalStore.openModal(modals.contact);
              }}
              className="text-black text-xl hover:text-gray"
            >
              {translations.header.contact}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default observer(Header);

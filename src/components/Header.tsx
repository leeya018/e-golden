import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ModalStore } from "@/mobx/modalStore";
import { modals } from "@/util";

// components/Header.js
export default function Header() {
  return (
    <header className="bg-black text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <div className="logo flex items-center justify-center">
          <Image alt="logo" width={70} height={70} src={"/images/logo.png"} />
        </div>
        <div className="navigation flex items-center">
          <Link href="/" className="nav-button">
            Home
          </Link>

          <Link href="/residency_relocation" className="nav-button">
            Residency & Relocation
          </Link>
          <Link href="/services" className="nav-button">
            Tax planning
          </Link>
          <Link href="/bussiness" className="nav-button">
            Bussiness
          </Link>
          <Link href="/realestate" className="nav-button">
            Real Estate
          </Link>
          <Link href="/about" className="nav-button">
            About
          </Link>
          <button onClick={() => ModalStore.openModal(modals.contact)}>
            <p className="text-xl border-2 rounded-md font-bold py-2 px-4 ml-4 relative overflow-hidden">
              <span className="inline-block transform transition-transform duration-100 ease-in-out hover:scale-105">
                Contact
              </span>
            </p>
          </button>
        </div>
      </nav>
    </header>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";

// components/Header.js
export default function Header() {
  return (
    <header className="bg-black text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <div className="logo flex items-center justify-center">
          <Image alt="logo" width={70} height={70} src={"/images/logo.png"} />
        </div>
        <div className="navigation flex items-center">
          <Link href="/" className="p-2 hover:scale-105 duration-100 ">
            Home
          </Link>

          <Link
            href="/residency_relocation"
            className="p-2 hover:scale-105 duration-100 "
          >
            Residency & Relocation
          </Link>
          <Link href="/services" className="p-2 hover:scale-105 duration-100 ">
            Tax planning
          </Link>
          <Link href="/bussiness" className="p-2 hover:scale-105 duration-100 ">
            Bussiness
          </Link>
          <Link
            href="/realestate"
            className="p-2 hover:scale-105 duration-100 "
          >
            Real Estate
          </Link>
          <Link href="/about" className="p-2 hover:scale-105 duration-100 ">
            About
          </Link>
          <Link href="/contact" className="p-2 hover:scale-105 duration-100 ">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}

import { ModalStore } from "@/mobx/modalStore";
import { modals } from "@/util";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function CalenderPopup() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 0) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

  return (
    <>
      {hasScrolled && (
        <div
          onClick={() => ModalStore.openModal(modals.scedule)}
          className="border-2 cursor-pointer rounded-md fixed bottom-0 right-0 m-4 p-4 bg-blue-600 text-black bg-white  shadow-xl border-black flex items-center space-x-4"
        >
          <span className="font-semibold text-lg text-black">
            Schedule Meeting Now
          </span>
        </div>
      )}
    </>
  );
}

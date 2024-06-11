import { ModalStore } from "@/mobx/modalStore";
import { modals } from "@/util";
import Image from "next/image";

export default function CalenderPopup() {
  return (
    <>
      <div
        onClick={() => ModalStore.openModal(modals.scedule)}
        className="popup bg-white"
      >
        <span className="font-semibold text-lg text-black   ">
          Schedule Meeting Now
        </span>
      </div>
    </>
  );
}

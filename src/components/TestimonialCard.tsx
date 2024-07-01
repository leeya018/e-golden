import { Testemonial } from "@/interfaces/Testemonial";
import { TestemonialStore } from "@/mobx/TestemonialStore";
import { languageStore } from "@/mobx/languageStore";
import { ModalStore } from "@/mobx/modalStore";
import { modals } from "@/util";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import React from "react";

const TestimonialCard = ({ location, name, info }: Testemonial) => {
  const { translations } = languageStore;

  return (
    <div className="w-52 px-4 py-4 rounded-xl my-5 mx-2 border-2  hover:bg-card-gradient ">
      {/* /first  */}
      <div className="flex gap-4 ">
        <Image
          className="h-8 w-8"
          alt={"quate"}
          width={36}
          height={36}
          src={"/images/quate.svg"}
        />
        <div className="flex flex-col ">
          <div className="font-semibold text-white text-[16px] leading-[23px] mb-1">
            {name}
          </div>
          <div className="font-normal text-dimWhite text-[14px] leading-[24px] mb-1">
            {location}
          </div>
        </div>
      </div>
      {/* /secodn  */}
      <div
        className=" font-normal text-[14px] leading-[32px] 
       text-white my-2 line-clamp-3 flex flex-wrap"
      >
        {info}
      </div>
      <div
        className="text-white underline cursor-pointer"
        onClick={() => {
          TestemonialStore.setTestemonial({ location, name, info });

          ModalStore.openModal(modals.testemonial);
        }}
      >
        {translations.testimonials.buttonTxt}
      </div>
    </div>
  );
};
export default observer(TestimonialCard);

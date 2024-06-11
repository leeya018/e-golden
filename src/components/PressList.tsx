import { PressCardT } from "@/interfaces/PressCard";
import { languageStore } from "@/mobx/languageStore";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import useAutoScroll from "@/hooks/useAutoScroll";

function PressList() {
  const { translations } = languageStore;
  const { scrollContainer, stopScrolling, startScrolling, isScrolling } =
    useAutoScroll(2, 5000, 60000);

  return (
    <div className="overflow-hidden mt-10 ">
      <div className="sub-title">{translations.press.title}</div>
      <div
        ref={scrollContainer}
        className="flex overflow-x-auto whitespace-nowrap hide-scrollbar gap-4"
        onMouseEnter={stopScrolling}
        onMouseLeave={() => {
          if (!isScrolling) {
            startScrolling();
          }
        }}
      >
        {(translations.press.list as PressCardT[]).map((item, index) => (
          <PressCard key={index} id={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default observer(PressList);

const PressCard = ({ id, title, description, imageUrl }: PressCardT) => {
  const router = useRouter();

  return (
    <div
      className="w-64 mx-2  my-5 rounded-xl  bg-card-gradient cursor-pointer"
      onClick={() => {
        router.push(`/press/${id}`);
      }}
    >
      <Image alt="relocation" height={180} width={256} src={imageUrl} />
      <div className="my-4 p-2">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-3 ">{description}</p>
      </div>
    </div>
  );
};

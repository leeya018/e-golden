import { PressCardT } from "@/interfaces/PressCard";
import { languageStore } from "@/mobx/languageStore";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import React, { useRef } from "react";

function PressCards() {
  const scrollContainer = useRef<any>(null);
  let scrollInterval: any = null;
  const { translations } = languageStore;

  const startScrolling = () => {
    if (scrollContainer.current) {
      const { scrollWidth, clientWidth } = scrollContainer.current;
      const maxScrollLeft = scrollWidth - clientWidth;

      scrollInterval = setInterval(() => {
        if (scrollContainer.current.scrollLeft < maxScrollLeft) {
          scrollContainer.current.scrollLeft += 2; // Adjust the speed here
        } else {
          scrollContainer.current.scrollLeft = 0; // Reset to the start
        }
      }, 10); // Adjust the speed here
    }
  };

  const stopScrolling = () => {
    if (scrollInterval) {
      clearInterval(scrollInterval);
    }
  };

  return (
    <div className="overflow-hidden mt-10 ">
      <div className="sub-title">Press</div>
      <div
        ref={scrollContainer}
        className="flex overflow-x-auto whitespace-nowrap hide-scrollbar gap-4 "
        onMouseEnter={startScrolling}
        onMouseLeave={stopScrolling}
      >
        {(translations.press as PressCardT[]).map((item, index) => (
          <PressCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default observer(PressCards);

const PressCard = ({ title, description, imageUrl }: PressCardT) => {
  return (
    <div className="w-64 mx-2  my-5 rounded-xl  bg-card-gradient cursor-pointer">
      <Image alt="relocation" height={180} width={256} src={imageUrl} />
      <div className="my-4 p-2">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-3 ">{description}</p>
      </div>
    </div>
  );
};

import { languageStore } from "@/mobx/languageStore";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import useAutoScroll from "@/hooks/useAutoScroll";
import { ImageCardT } from "@/interfaces/ImageCard";
import ImageCard from "./ImageCard";
import { toJS } from "mobx";

type ImageCardListProps = {
  title: string;
  list: ImageCardT[];
  onClick: any;
};
function ImageCardList({ title, list, onClick }: ImageCardListProps) {
  const { translations } = languageStore;

  console.log({ list: toJS(list) });
  const router = useRouter();
  const { scrollContainer, stopScrolling, startScrolling, isScrolling } =
    useAutoScroll(2, 5000, 60000);

  return (
    <div className="overflow-hidden mt-10 ">
      <div className="sub-title">
        <p>
          <span className="text-gold">
            {translations.servicesMain.companyName + " "}
          </span>
          {title}
        </p>
      </div>
      <div
        ref={scrollContainer}
        className={`overflow-x-auto whitespace-nowrap 
        hide-scrollbar gap-4 grid sm:grid-cols-1
         md:grid-cols-2 lg:grid-cols-3`}
        onMouseEnter={stopScrolling}
        onMouseLeave={() => {
          if (!isScrolling) {
            startScrolling();
          }
        }}
      >
        {list.map((item, index) => (
          <ImageCard
            key={index}
            id={index}
            {...item}
            onClick={() => onClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default observer(ImageCardList);

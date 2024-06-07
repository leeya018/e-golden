import Image from "next/image";
import React, { useRef } from "react";

const newsItems = [
  {
    title: "Tech Advances",
    description: "Latest advancements in technology .",
    imageUrl: "/images/relocation.png",
  },
  {
    title: "Tech Advances",
    description: "Latest advancements in technology .",
    imageUrl: "/images/relocation.png",
  },
  {
    title: "Tech Advances",
    description: "Latest advancements in technology .",
    imageUrl: "/images/relocation.png",
  },
];

export default function PressCards() {
  const scrollContainer = useRef<any>(null);
  let scrollInterval: any = null;

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
        {newsItems.map((item, index) => (
          <PressCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

type PressCard = {
  title: string;
  imageUrl: string;
  description: string;
};
const PressCard = ({ title, description, imageUrl }: PressCard) => {
  return (
    <div className="w-64 mx-2  my-5 rounded-xl  bg-card-gradient cursor-pointer">
      <Image alt="relocation" height={180} width={256} src={imageUrl} />
      <div className="my-4 p-2">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2 ">{description}</p>
      </div>
    </div>
  );
};

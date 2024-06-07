import Image from "next/image";
import { imageUrls } from "@/util";
import { useRef } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

// components/ServiceCard.js
export default function ImagesSection() {
  const scrollContainer = useRef<any>(null);

  const scrollLeft = () => {
    scrollContainer.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainer.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="relative w-4/5 mx-auto flex items-center my-10">
      <MdArrowBackIosNew
        size={40}
        onClick={scrollLeft}
        className="  cursor-pointer font-semibold  h-full"
      />

      <ul
        ref={scrollContainer}
        className="flex gap-2  w-full overflow-x-scroll hide-scrollbar"
      >
        {imageUrls.map((url, key) => (
          <li key={key} className="shrink-0">
            <Image
              src={url}
              alt="house image"
              width={200}
              height={200}
              className="object-cover"
            />
          </li>
        ))}
      </ul>

      <MdArrowForwardIos
        size={40}
        onClick={scrollRight}
        className="  cursor-pointer font-semibold  h-full"
      />
    </div>
  );
}

import React, { useRef } from "react";
import TestimonialCard from "./TestimonialCard";
import { Testemonial } from "@/interfaces/Testemonial";
import { observer } from "mobx-react-lite";
import { languageStore } from "@/mobx/languageStore";

function TentemonialList() {
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
      <div
        ref={scrollContainer}
        className=" flex overflow-x-auto whitespace-nowrap hide-scrollbar gap-4 
         "
        // onMouseEnter={startScrolling}
        // onMouseLeave={stopScrolling}
      >
        {(translations.testimonials as Testemonial[]).map(
          (testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          )
        )}
      </div>
    </div>
  );
}

export default observer(TentemonialList);

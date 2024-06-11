import React from "react";
import TestimonialCard from "./TestimonialCard";
import { Testemonial } from "@/interfaces/Testemonial";
import { observer } from "mobx-react-lite";
import { languageStore } from "@/mobx/languageStore";
import useAutoScroll from "@/hooks/useAutoScroll";

function TestimonialList() {
  const { translations } = languageStore;
  const { scrollContainer, stopScrolling, startScrolling, isScrolling } =
    useAutoScroll();

  return (
    <div className="overflow-hidden mt-10 ">
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
        {(translations.testimonials.list as Testemonial[]).map(
          (testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          )
        )}
      </div>
    </div>
  );
}

export default observer(TestimonialList);

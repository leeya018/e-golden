import React, { useRef } from "react";
import TestimonialCard from "./TestimonialCard";
import { Tenstemonial } from "@/interfaces/Tensttemonial";
const testimonials: Tenstemonial[] = [
  {
    location: "Irael, Rishon",
    name: "John Smith",
    info: "I chose E-golden for my wealth management needs, and I have been consistently impressed by their in-depth knowledge and personalized approach. Their inheritance management services helped my family navigate a complex situation, preserving our assets and maintaining family harmony. I wholeheartedly endorse their services. ",
  },
  {
    location: "Irael, Rishon",
    name: "Madelaine 1",
    info: "I chose E-golden for my wealth management needs, and I have been consistently impressed by their in-depth knowledge and personalized approach. Their inheritance management services helped my family navigate a complex situation, preserving our assets and maintaining family harmony. I wholeheartedly endorse their services. ",
  },
  {
    location: "Irael, Rishon",
    name: "Madelaine 2",
    info: "I chose E-golden for my wealth management needs, and I have been consistently impressed by their in-depth knowledge and personalized approach. Their inheritance management services helped my family navigate a complex situation, preserving our assets and maintaining family harmony. I wholeheartedly endorse their services. ",
  },
  {
    location: "Irael, Rishon",
    name: "Madelaine 3",
    info: "I chose E-golden for my wealth management needs, and I have been consistently impressed by their in-depth knowledge and personalized approach. Their inheritance management services helped my family navigate a complex situation, preserving our assets and maintaining family harmony. I wholeheartedly endorse their services. ",
  },
  {
    location: "Irael, Rishon",
    name: "Madelaine 4",
    info: "I chose E-golden for my wealth management needs, and I have been consistently impressed by their in-depth knowledge and personalized approach. Their inheritance management services helped my family navigate a complex situation, preserving our assets and maintaining family harmony. I wholeheartedly endorse their services. ",
  },
  {
    location: "Irael, Rishon",
    name: "Madelaine 5",
    info: "I chose E-golden for my wealth management needs, and I have been consistently impressed by their in-depth knowledge and personalized approach. Their inheritance management services helped my family navigate a complex situation, preserving our assets and maintaining family harmony. I wholeheartedly endorse their services. ",
  },
  {
    location: "Irael, Rishon",
    name: "Madelaine 6",
    info: "I chose E-golden for my wealth management needs, and I have been consistently impressed by their in-depth knowledge and personalized approach. Their inheritance management services helped my family navigate a complex situation, preserving our assets and maintaining family harmony. I wholeheartedly endorse their services. ",
  },
  {
    location: "Irael, Rishon",
    name: "Madelaine 6",
    info: "I chose E-golden for my wealth management needs, and I have been consistently impressed by their in-depth knowledge and personalized approach. Their inheritance management services helped my family navigate a complex situation, preserving our assets and maintaining family harmony. I wholeheartedly endorse their services. ",
  },
  {
    location: "Irael, Rishon",
    name: "Madelaine 6",
    info: "I chose E-golden for my wealth management needs, and I have been consistently impressed by their in-depth knowledge and personalized approach. Their inheritance management services helped my family navigate a complex situation, preserving our assets and maintaining family harmony. I wholeheartedly endorse their services. ",
  },
  {
    location: "Irael, Rishon",
    name: "Madelaine 6",
    info: "I chose E-golden for my wealth management needs, and I have been consistently impressed by their in-depth knowledge and personalized approach. Their inheritance management services helped my family navigate a complex situation, preserving our assets and maintaining family harmony. I wholeheartedly endorse their services. ",
  },
  {
    location: "Irael, Rishon",
    name: "Madelaine 6",
    info: "I chose E-golden for my wealth management needs, and I have been consistently impressed by their in-depth knowledge and personalized approach. Their inheritance management services helped my family navigate a complex situation, preserving our assets and maintaining family harmony. I wholeheartedly endorse their services. ",
  },
];

export default function UserPosts() {
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
    <div className="overflow-hidden mt-10">
      <div
        ref={scrollContainer}
        className="flex overflow-x-auto whitespace-nowrap hide-scrollbar gap-4"
        // onMouseEnter={startScrolling}
        // onMouseLeave={stopScrolling}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
}

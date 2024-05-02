import React from "react";
import TestimonialCard from "./TestimonialCard";
const testimonials = [
  {
    name: "Jane Faber",
    quote:
      "I never knew how much I would enjoy the services of a concierge until I tried one.",
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "John Smith",
    quote:
      "I love having someone who makes my appointments and procures my needs. I can finally relax and enjoy life!",
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Madelaine Taylor",
    quote:
      "A concierge from E-golden really takes a load off my mind during busy times.",
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function UserPosts() {
  return (
    <div className="w-[80%] mx-auto flex flex-col gap-2 mt-10">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
  );
}

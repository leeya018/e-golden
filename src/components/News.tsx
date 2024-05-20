import React, { useRef } from "react";

const newsItems = [
  {
    name: "Tech Advances",
    description: "Latest advancements in technology .",
  },
  {
    name: "Market Trends",
    description: "Understanding the latest market .",
  },
  {
    name: "Health News",
    description: "New studies show the benefits .",
  },
  {
    name: "Health News",
    description: "New studies show the benefits .",
  },
  {
    name: "Health News",
    description: "New studies show the benefits .",
  },
  {
    name: "Health News",
    description: "New studies show the benefits .",
  },
  {
    name: "Health News",
    description: "New studies show the benefits .",
  },
  {
    name: "Health News",
    description: "New studies show the benefits .",
  },
  {
    name: "Health News",
    description: "New studies show the benefits .",
  },
  {
    name: "Health News",
    description: "New studies show the benefits .",
  },
];

export default function News() {
  const scrollContainer = useRef(null);
  let scrollInterval = null;

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
      {/* <TestimonialCard key={1} {...testimonials[0]} /> */}

      <div
        ref={scrollContainer}
        className="flex  overflow-x-auto whitespace-nowrap hide-scrollbar gap-4"
        onMouseEnter={startScrolling}
        onMouseLeave={stopScrolling}
      >
        {newsItems.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

type NewsCard = {
  name: string;
  description: string;
};
const NewsCard = ({ name, description }: NewsCard) => {
  return (
    <div
      className="flex flex-col rounded-md items-center px-4 py-10    
      w-1/4  border-2"
    >
      <h3 className="text-lg font-bold mb-2">{name}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

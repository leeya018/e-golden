import React from "react";

const newsItems = [
  {
    name: "Tech Advances",
    description:
      "Latest advancements in technology are paving the way for futuristic innovations.",
  },
  {
    name: "Market Trends",
    description:
      "Understanding the latest market trends that could affect your investments.",
  },
  {
    name: "Health News",
    description:
      "New studies show the benefits of a balanced diet on long-term health.",
  },
  {
    name: "Health News",
    description:
      "New studies show the benefits of a balanced diet on long-term health.",
  },
  {
    name: "Health News",
    description:
      "New studies show the benefits of a balanced diet on long-term health.",
  },
];

export default function News() {
  return (
    <div className="flex flex-col gap-2 mt-10">
      {newsItems.map((item, index) => (
        <NewsCard key={index} {...item} />
      ))}
    </div>
  );
}

type NewsCard = {
  name: string;
  description: string;
};
const NewsCard = ({ name, description }: NewsCard) => {
  return (
    <div className="flex flex-col p-4 max-w-md  border border-gray-200 rounded-lg">
      <h3 className="text-lg font-bold mb-2">{name}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

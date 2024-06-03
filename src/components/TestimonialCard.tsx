import Image from "next/image";
import React from "react";

type TestimonialCardProps = {
  imageUrl: string;
  name: string;
  quote: string;
};
const TestimonialCard = ({ imageUrl, name, quote }: TestimonialCardProps) => {
  return (
    <div
      className="flex flex-col items-center rounded-md
    p-4 sm:w-1/2 md:w-1/3 lg:w-1/4  border-2 "
    >
      <Image
        className="rounded-full mb-4 h-20 w-20"
        alt={name}
        width={80}
        height={80}
        src={imageUrl}
      />

      <div className="flex flex-wrap text-sm text-center text-gray-600 mb-4">
        {quote}
      </div>
      <p className="font-semibold text-lg text-center">{name}</p>
    </div>
  );
};

export default TestimonialCard;

// import Image from "next/image";
// import React from "react";

// interface TestimonialCardProps {
//   imageUrl: string;
//   quote: string;
//   name: string;
// }

// const TestimonialCard: React.FC<TestimonialCardProps> = ({
//   imageUrl,
//   quote,
//   name,
// }) => {
//   return (
//     <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
//       {/* <img
//         className="w-full h-48 object-cover object-center"
//         src={imageUrl}
//         alt={name}
//       /> */}
//       <Image
//         className="rounded-full mb-4 h-20 w-20"
//         alt={name}
//         width={80}
//         height={80}
//         src={imageUrl}
//       />
//       <div className="p-6">
//         <p className="text-gray-700 text-base mb-4">{quote}</p>
//         <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
//       </div>
//     </div>
//   );
// };

// export default TestimonialCard;

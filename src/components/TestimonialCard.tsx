import { Tenstemonial } from "@/interfaces/Tensttemonial";
import Image from "next/image";
import React from "react";

const TestimonialCard = ({ location, name, info }: Tenstemonial) => {
  return (
    <div className="sm:w-24 lg:w-52 px-4 py-4 rounded-xl my-5 mx-2 border-2  ">
      {/* /first  */}
      <div className="flex gap-4 ">
        <Image
          className="h-10 w-10"
          alt={"quate"}
          width={42}
          height={42}
          src={"/images/quate.svg"}
        />
        <div className="flex flex-col ">
          <div className="font-semibold text-white text-[16px] leading-[23px] mb-1">
            {name}
          </div>
          <div className="font-normal text-dimWhite text-[14px] leading-[24px] mb-1">
            {location}
          </div>
        </div>
      </div>
      {/* /secodn  */}
      <p
        className=" font-normal text-[14px] leading-[32px]
       text-white my-2 line-clamp-3"
      >
        {info}
      </p>
      <button className="text-white underline">Read More</button>
    </div>
  );
};

export default TestimonialCard;

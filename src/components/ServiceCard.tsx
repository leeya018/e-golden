import { IoArrowForwardSharp } from "react-icons/io5";

type ServiceCardProps = {
  title: string;
  description: string;
};
// components/ServiceCard.js
export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-lg cursor-pointer">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          <p>{description}</p>
        </div>
        <IoArrowForwardSharp size={25} />
      </div>
    </div>
  );
}

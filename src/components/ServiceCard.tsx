type ServiceCardProps = {
  title: string;
  description: string[];
  onClick: any;
};
// components/ServiceCard.js
export default function ServiceCard({
  title,
  description,
  onClick,
}: ServiceCardProps) {
  return (
    <div
      className="border rounded-lg p-10 shadow-lg cursor-pointer flex-1"
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <div>
          <h2 className="mb-5 text-xl font-bold">{title}</h2>
          <ul className="flex flex-col gap-2">
            {description.map((item, key) => (
              <li key={key} className="list-disc list-inside ">
                {" "}
                {item}
              </li>
            ))}
          </ul>
          <p>{description}</p>
        </div>
        {/* <IoArrowForwardSharp size={25} /> */}
      </div>
    </div>
  );
}

import { ImageCardT } from "@/interfaces/ImageCard";
import Image from "next/image";

const ImageCard = ({
  title,
  description,
  imageUrl,
  services,
  onClick,
}: ImageCardT) => {
  return (
    <div
      className="w-64 mx-2  my-5 rounded-xl  bg-card-gradient cursor-pointer"
      onClick={onClick}
    >
      <Image alt="relocation" height={180} width={256} src={imageUrl} />
      <div className="my-4 p-5">
        <h3 className="text-lg font-semibold mb-2 truncate subtitle text-middle">
          {title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-3 ">{description}</p>
        {services && (
          <ul className="text-sm list-none text-gray-600">
            {services.map((service, key) => (
              <li className="list-none text" key={key}>
                {service}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ImageCard;

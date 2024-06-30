import { ImageCardT } from "@/interfaces/ImageCard";
import { languageStore } from "@/mobx/languageStore";
import Image from "next/image";

const ImageCard = ({
  title,
  titleImg,
  description,
  imageUrl,
  services,
  onClick,
}: ImageCardT) => {
  const { translations } = languageStore;

  return (
    <div
      className=" mx-2  my-5 rounded-xl  bg-card-gradient cursor-pointer "
      onClick={onClick}
    >
      <Image
        alt="relocation"
        height={256}
        width={256}
        src={imageUrl}
        className="w-full"
      />
      <div className="my-4 p-5">
        <h3 className="text-lg font-semibold mb-2 whitespace-normal  ">
          {titleImg}
        </h3>
        <p className="text-sm text-gray-600 whitespace-normal line-clamp-3">
          {description}
        </p>
        {/* {services && (
          <ul className="text-sm list-none text-gray-600">
            {services.map((service, key) => (
              <li className="list-none text" key={key}>
                {service}
              </li>
            ))}
          </ul>
        )} */}
      </div>
    </div>
  );
};

export default ImageCard;

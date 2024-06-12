import { languageStore } from "@/mobx/languageStore";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import useAutoScroll from "@/hooks/useAutoScroll";
import { ImageCardT } from "@/interfaces/ImageCard";
import ImageCard from "./ImageCard";
import ImageCardList from "./ImageCardList";

function PressList() {
  const router = useRouter();
  const { translations } = languageStore;

  return (
    <ImageCardList
      title={translations.press.title}
      list={translations.press.list}
      onClick={(index: number) => router.push(`press/${index}`)}
    />
  );
  // onClick={() => router.push(`press/${index}`)}
}

export default observer(PressList);

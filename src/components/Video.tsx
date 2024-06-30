"use client";

import { useEffect, useState } from "react";

type VideoProps = {
  title?: string;
  src: string;
};
// components/Video.js
const Video = ({ src, title }: VideoProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <video
          autoPlay
          muted
          loop
          controls
          className="w-full h-auto"
          src={src}
        ></video>
      )}
    </>
  );
};

export default Video;

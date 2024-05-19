type VideoProps = {
  title: string;
  src: string;
};
// components/Video.js
const Video = ({ src, title }: VideoProps) => {
  return (
    <video
      autoPlay
      muted
      loop
      controls
      className="w-full h-auto"
      src={
        "https://vid.cdn-website.com/md/pexels/videos/belem-tower-lisbon-portugal-sintra-4823566-v.mp4"
      }
    ></video>
    // <div
    //   className="video-container"
    //   style={{
    //     position: "relative",
    //     paddingBottom: "56.25%",
    //     height: 0,
    //     overflow: "hidden",
    //     maxWidth: "100%",
    //   }}
    // >
    //   <iframe
    //     src={src}
    //     title={title}
    //     style={{
    //       position: "absolute",
    //       top: 0,
    //       left: 0,
    //       width: "100%",
    //       height: "100%",
    //     }}
    //     frameBorder="0"
    //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //     allowFullScreen
    //   ></iframe>
    // </div>
  );
};

export default Video;

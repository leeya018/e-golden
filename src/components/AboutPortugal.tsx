// Anywhere inside your component or page files
import Video from "./Video";

export default function AboutPortugal() {
  return (
    <div className="w-[80%] mx-auto mt-10">
      <Video
        src="https://www.youtube.com/embed/pG8t_5pOYlA"
        title="Special Video"
      />
    </div>
  );
}

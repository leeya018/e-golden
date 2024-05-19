// Anywhere inside your component or page files
import Video from "./Video";

export default function AboutPortugal() {
  return (
    <div className=" mt-10">
      <Video
        src="https://www.youtube.com/embed/pG8t_5pOYlA"
        title="Special Video"
      />
    </div>
  );
}

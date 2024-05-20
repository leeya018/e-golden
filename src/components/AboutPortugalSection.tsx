// Anywhere inside your component or page files
import Video from "./Video";

export default function AboutPortugalSection() {
  return (
    <section className=" h-screen my-10">
      <Video
        src="https://www.youtube.com/embed/pG8t_5pOYlA"
        title="Special Video"
      />
    </section>
  );
}

// Anywhere inside your component or page files
import { languageStore } from "@/mobx/languageStore";
import Video from "./Video";

export default function AboutPortugalSection() {
  const { translations } = languageStore;

  return (
    <section className="relative mt-10 min-h-screen my-10">
      <Video
        src="https://www.youtube.com/embed/pG8t_5pOYlA"
        title="Special Video"
      />
      <div
        className="absolute z-50 top-0 left-0 translate-x-1/2 translate-y-1/2 flex flex-col font-semibold text-2xl 
      justify-center items-center gap-3 mb-20 mt-10 text-white"
      >
        <div>From Relocation to Investments</div>
        <div>Your One Stop Shop Services</div>
        <div>With E-golden</div>
      </div>
    </section>
  );
}

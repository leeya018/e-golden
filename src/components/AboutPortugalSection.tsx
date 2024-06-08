// Anywhere inside your component or page files
import { languageStore } from "@/mobx/languageStore";
import Video from "./Video";

export default function AboutPortugalSection() {
  const { translations } = languageStore;

  return (
    <section className="relative   mb-10">
      <Video
        src="https://www.youtube.com/embed/pG8t_5pOYlA"
        title="Special Video"
      />
      <div
        className="center-absolute-top flex flex-col font-semibold text-2xl 
      justify-center items-center gap-3 mb-20 mt-10 "
      >
        <div className="text-black">From Relocation to Investments</div>
        <div className="text-black">Your One Stop Shop Services</div>
        <div className="text-black">With E-golden</div>
      </div>
    </section>
  );
}

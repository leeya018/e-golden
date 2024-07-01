// Anywhere inside your component or page files
import { languageStore } from "@/mobx/languageStore";
import Video from "./Video";
import { observer } from "mobx-react-lite";

function AboutPortugalSection() {
  const { translations } = languageStore;

  return (
    <section className="relative   mb-10">
      <Video
        src="https://vid.cdn-website.com/md/pexels/videos/belem-tower-lisbon-portugal-sintra-4823566-v.mp4"
        title="Special Video"
      />
      <div
        className="flex center-absolute-top  flex-col font-semibold text-sm md:text-md lg:text-xl xl:text-xl 
      justify-center items-center gap-3 mb-20 mt-10 bg-white bg-opacity-30"
      >
        <ul className="text-black flex flex-col items-center justify-center shadow-2xl p-2 rounded-md">
          {translations.servicesMain.subtitles.map(
            (sub: string, key: number) => (
              <li key={key} className="">
                <span className=""></span> {sub}
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
}
export default observer(AboutPortugalSection);

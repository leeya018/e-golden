// Anywhere inside your component or page files
import { languageStore } from "@/mobx/languageStore";
import Video from "./Video";
import { observer } from "mobx-react-lite";

function AboutPortugalSection() {
  const { translations } = languageStore;

  return (
    <section className="relative   mb-10">
      <Video
        src="https://www.youtube.com/embed/pG8t_5pOYlA"
        title="Special Video"
      />
      <div
        className="center-absolute-top flex flex-col font-semibold text-2xl 
      justify-center items-center gap-3 mb-20 mt-10 bg-white bg-opacity-30"
      >
        <ul className="text-black flex flex-col items-center shadow-2xl p-2 rounded-md">
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

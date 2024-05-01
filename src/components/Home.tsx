// Anywhere inside your component or page files
import Video from "../components/Video";

export default function Home() {
  return (
    <div>
      <Video src="https://www.youtube.com/embed/pG8t_5pOYlA" title="Special Video" />
    </div>
  );
}

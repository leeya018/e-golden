// components/LanguageSwitcher.tsx
import { languageStore } from "@/mobx/languageStore";
import { observer } from "mobx-react-lite";

const LanguageSwitcher = observer(() => {
  const changeLanguage = (newLocale: string) => {
    console.log({ newLocale });
    languageStore.setLocale(newLocale);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")} className="p-2">
        EN
      </button>
      <button onClick={() => changeLanguage("es")} className="p-2">
        ES
      </button>
      <button onClick={() => changeLanguage("he")} className="p-2">
        He
      </button>
    </div>
  );
});

export default LanguageSwitcher;

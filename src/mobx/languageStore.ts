// stores/languageStore.ts
import { autorun, makeAutoObservable, runInAction, toJS } from "mobx";
import enTranslations from "@/locales/en/common.json";
import esTranslations from "@/locales/es/common.json";
import heTranslations from "@/locales/he/common.json";
import { create } from "mobx-persist";

// let hydrate: any;

// if (typeof window !== "undefined") {
//   hydrate = create({
//     storage: localStorage, // or sessionStorage
//     jsonify: true,
//   });
// }

class LanguageStore {
  translations: any = enTranslations;
  locale: string = "en";
  direction: string = "ltr";

  constructor() {
    makeAutoObservable(this);
    // this.translations = this.loadTranslations();
    // hydrate("languageStore", this).then(() => {
    //   this.translations = "sehnteirsntisnei";
    //   this.locale = "en";
    // });
  }
  setDirection(newDirection: string) {
    this.direction = newDirection;
    document.documentElement.setAttribute("dir", newDirection);
  }

  loadTranslations() {
    switch (this.locale) {
      case "en":
        this.translations = enTranslations;
        this.setDirection("ltr");
        break;
      case "es":
        this.translations = esTranslations;
        this.setDirection("ltr");
        break;
      case "he":
        this.translations = heTranslations;
        this.setDirection("rtl");
        break;
      default:
        this.translations = enTranslations;
        this.setDirection("ltr");
    }

    console.log({ translations: this.translations });
    // runInAction(() => {
    //   this.translations = translations;
    // });
  }

  setLocale(newLocale: string) {
    this.locale = newLocale;
    this.loadTranslations();
  }
}
// Usage example
export const languageStore = new LanguageStore();

autorun(() => {
  console.log(languageStore.locale);
  console.log(toJS(languageStore.translations));
});

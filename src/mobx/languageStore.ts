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

  constructor() {
    makeAutoObservable(this);
    // this.translations = this.loadTranslations();
    // hydrate("languageStore", this).then(() => {
    //   this.translations = "sehnteirsntisnei";
    //   this.locale = "en";
    // });
  }

  loadTranslations() {
    switch (this.locale) {
      case "en":
        this.translations = enTranslations;
        break;
      case "es":
        this.translations = esTranslations;
        break;
      case "he":
        this.translations = heTranslations;
        break;
      default:
        this.translations = enTranslations;
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

import { makeAutoObservable } from "mobx";
import { languageStore } from "./languageStore";

class ServiceStore {
  chosenService = null;

  constructor() {
    const { translations } = languageStore;

    makeAutoObservable(this);
    this.chosenService = translations.services["residency_relocation"];
  }

  setChosenService(service: any) {
    this.chosenService = service;
  }

  clearChosenService() {
    this.chosenService = null;
  }
}

const serviceStore = new ServiceStore();
export default serviceStore;

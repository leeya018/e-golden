import { makeAutoObservable } from "mobx";
import { languageStore } from "./languageStore";
import { Service } from "@/interfaces/Service";

class ServiceStore {
  chosenService: Service | null = null;

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

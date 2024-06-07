import { Testemonial } from "@/interfaces/Testemonial";
import { modals } from "@/util";
import { makeAutoObservable } from "mobx";

class TestemonialS {
  chosenTestemonial: Testemonial | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setTestemonial = (testemonial: Testemonial | null) => {
    this.chosenTestemonial = testemonial;
  };
}
export const TestemonialStore = new TestemonialS();

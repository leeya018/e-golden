import { Testemonial } from "@/interfaces/Testemonial";
import { TestemonialStore } from "@/mobx/TestemonialStore";
import { observer } from "mobx-react-lite";
import React from "react";

function TestemonialData() {
  const { location, name, info } =
    TestemonialStore.chosenTestemonial as Testemonial;
  console.log({ location, name, info });
  return (
    <div className=" w-full h-full text-black bg-black">
      <div>{location}</div>
      <div>{name}</div>
      <div>{info}</div>
    </div>
  );
}
export default observer(TestemonialData);

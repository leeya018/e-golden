import { Testemonial } from "@/interfaces/Testemonial";
import { TestemonialStore } from "@/mobx/TestemonialStore";
import { observer } from "mobx-react-lite";
import React from "react";

function TestemonialData() {
  const { location, name, info } =
    TestemonialStore.chosenTestemonial as Testemonial;
  console.log({ location, name, info });
  return (
    <div className=" w-full  text-black card-gradient leading-[32px] ">
      <div className=" font-normal text-md  mb-8">{info}</div>
      <div className="font-semibold text-xl">{name}</div>
      <div className="font-normal text-md">{location}</div>
    </div>
  );
}
export default observer(TestemonialData);

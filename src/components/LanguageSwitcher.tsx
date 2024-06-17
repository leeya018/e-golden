import React from "react";
import Select from "react-select";
import { observer } from "mobx-react-lite";
import { languageStore } from "@/mobx/languageStore";
import ReactCountryFlag from "react-country-flag";

const LanguageSwitcher = observer(() => {
  const changeLanguage = (newLocale: string) => {
    console.log({ newLocale });
    languageStore.setLocale(newLocale);
  };

  const options = [
    {
      value: "USD",
      label: (
        <div
          className="flex items-center text-black "
          onClick={() => changeLanguage("en")}
        >
          <ReactCountryFlag
            countryCode="US"
            svg
            style={{
              width: "2em",
              height: "2em",
            }}
            title="US"
          />
          <span className="mx-2.5">USA</span>
        </div>
      ),
    },
    {
      value: "ILS",
      label: (
        <div
          className="flex items-center text-black "
          onClick={() => changeLanguage("he")}
        >
          <ReactCountryFlag
            countryCode="IL"
            svg
            style={{
              width: "2em",
              height: "2em",
            }}
            title="IL"
          />
          <span className="mx-2.5">Israel</span>
        </div>
      ),
    },

    {
      value: "EUR",
      label: (
        <div
          className="flex items-center text-black "
          onClick={() => changeLanguage("pt")}
        >
          <ReactCountryFlag
            countryCode="PT"
            svg
            style={{
              width: "2em",
              height: "2em",
            }}
            title="PT"
          />
          <span className="mx-2.5">Portugal</span>
        </div>
      ),
    },
  ];

  return <Select options={options} defaultValue={options[0]} />;
});

export default LanguageSwitcher;

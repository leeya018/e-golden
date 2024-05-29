import React from "react";
import Select from "react-select";
import CurrencyFlag from "react-currency-flags";
import { observer } from "mobx-react-lite";
import { languageStore } from "@/mobx/languageStore";

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
          className="flex items-center text-black"
          onClick={() => changeLanguage("en")}
        >
          <CurrencyFlag currency="USD" size="lg" />
          <span style={{ marginLeft: 10 }}>USA</span>
        </div>
      ),
    },
    {
      value: "ILS",
      label: (
        <div
          className="flex items-center text-black"
          onClick={() => changeLanguage("he")}
        >
          <CurrencyFlag currency="ILS" size="lg" />
          <span style={{ marginLeft: 10 }}>Israel</span>
        </div>
      ),
    },

    {
      value: "EUR",
      label: (
        <div
          className="flex items-center text-black"
          onClick={() => changeLanguage("es")}
        >
          <CurrencyFlag currency="EUR" size="lg" />
          <span style={{ marginLeft: 10 }}>Spain</span>
        </div>
      ),
    },
  ];

  return <Select options={options} defaultValue={options[0]} />;
});

export default LanguageSwitcher;

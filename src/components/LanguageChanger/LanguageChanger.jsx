import React from "react";
import i18n from "../../i18n";

import LocalStorage from "utils/localStorage";
import {
  Wrapper,
  RussianFlagIcon,
  BritainFlagIcon
} from "./LanguageChanger.components";
import { EN, RU } from "constants/languages";
import { FILTERS } from "constants/filters";

const LanguageChanger = () => {
  const handleLanguageChange = event => {
    const language = event.target.name;
    LocalStorage.set("language", language);
    LocalStorage.remove(Object.values(FILTERS));
    i18n.changeLanguage(language);
  };

  return (
    <Wrapper>
      <RussianFlagIcon name={RU} onClick={handleLanguageChange} />
      <BritainFlagIcon name={EN} onClick={handleLanguageChange} />
    </Wrapper>
  );
};

export default LanguageChanger;

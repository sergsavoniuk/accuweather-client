import React from "react";
import i18n from "../../i18n";

import LocalStorage from "utils/localStorage";
import {
  Wrapper,
  RussianFlagIcon,
  BritainFlagIcon
} from "./LanguageChanger.components";

const LanguageChanger = () => {
  const handleLanguageChange = event => {
    const language = event.target.name;
    LocalStorage.set("language", language);
    LocalStorage.remove("current");
    i18n.changeLanguage(language);
  };

  return (
    <Wrapper>
      <RussianFlagIcon name="ru" onClick={handleLanguageChange} />
      <BritainFlagIcon name="en" onClick={handleLanguageChange} />
    </Wrapper>
  );
};

export default LanguageChanger;

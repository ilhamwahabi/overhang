import React from "react";
import { observer } from "mobx-react-lite";
import cx from "classnames";

import { themeState } from "../state/themeState";

const Title = () => {
  return (
    <h1
      className={cx(
        `text-2xl md:text-3xl p-4 fixed top-0 left-0 leading-regular`,
        { "text-black": themeState.theme === "light" },
        { "text-white": themeState.theme === "dark" }
      )}
    >
      Over Hangman
    </h1>
  );
};

export default observer(Title);

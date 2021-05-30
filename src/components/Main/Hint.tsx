import React from "react";
import { observer } from "mobx-react-lite";
import cx from "classnames";

import { quizState } from "../../state/quizState";
import { themeState } from "../../state/themeState";

const Hint = () => {
  return (
    <h2
      className={cx(
        `text-3xl md:text-5xl tracking-wider leading-regular mb-16 md:mb-20`,
        { "text-black": themeState.theme === "light" },
        { "text-white": themeState.theme === "dark" }
      )}
    >
      {quizState.currentQuiz.hint}
    </h2>
  );
};

export default observer(Hint);

import React from "react";
import { observer } from "mobx-react-lite";
import clsx from "clsx";
import Anime from "react-anime";

import { quizState } from "../../state/quizState";
import { themeState } from "../../state/themeState";

const Hint = () => {
  return (
    <Anime
      easing="easeOutElastic"
      duration={750}
      direction="normal"
      delay={250}
      translateY={["-5vh", "0"]}
      opacity={["0", "100%"]}
    >
      <h2
        className={clsx(
          `text-3xl md:text-5xl tracking-wider leading-regular mb-16 md:mb-20`,
          { "text-black": themeState.theme === "light" },
          { "text-white": themeState.theme === "dark" }
        )}
      >
        {quizState.currentQuiz.hint}
      </h2>
    </Anime>
  );
};

export default observer(Hint);

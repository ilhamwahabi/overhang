import React from "react";
import { observer } from "mobx-react-lite";

import { quizState } from "../../state/quizState";
import { themeState } from "../../state/themeState";

const Hint = () => {
  return (
    <div
      className={`
        text-3xl md:text-4xl
        mb-16 md:mb-24
        text-${themeState.secondary}
      `}
    >
      {quizState.currentQuiz.hint}
    </div>
  );
};

export default observer(Hint);

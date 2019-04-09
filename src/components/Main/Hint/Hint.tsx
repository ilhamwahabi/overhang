import React from "react";
import { observer } from "mobx-react-lite";
import cx from "classnames";

import { quizState } from "../../../state/quizState";
import { themeState } from "../../../state/themeState";

const Hint = () => {
  return (
    <div className={cx("text-4xl", "mb-24", `text-${themeState.secondary}`)}>
      {quizState.currentQuiz.hint}
    </div>
  );
};

export default observer(Hint);

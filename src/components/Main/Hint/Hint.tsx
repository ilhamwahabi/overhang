import React from "react";
import { observer } from "mobx-react-lite";

import { quizState } from "../../../state/quizState";

const Hint = () => {
  return <div className="text-4xl mb-20">{quizState.currentQuiz.hint}</div>;
};

export default observer(Hint);

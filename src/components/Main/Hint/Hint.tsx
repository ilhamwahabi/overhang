import React from "react";
import { quizState } from "../../../state/quizState";
import { observer } from "mobx-react";

const Hint = () => {
  return <div className="text-4xl mb-20">{quizState.currentQuiz.hint}</div>;
};

export default observer(Hint);

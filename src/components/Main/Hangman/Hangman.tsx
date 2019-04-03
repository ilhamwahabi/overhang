import React from "react";
import Field from "./Field/Field";
import { quizState } from "../../../state/quizState";

const Hangman = () => {
  const word = "react";

  const renderWordField = (word: string): any[] => {
    return word
      .split("")
      .map((letter, index) => <Field key={index} isSpace={letter === " "} />);
  };

  return (
    <div className="flex mb-20">
      {renderWordField(quizState.currentQuiz.answer)}
    </div>
  );
};

export default Hangman;

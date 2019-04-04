import React from "react";
import Field from "./Field/Field";
import { quizState } from "../../../state/quizState";

const Hangman = () => {
  const renderWordField = (word: string) => {
    const rows: any[] = [];

    if (word.length > 10) {
      word.split(" ").forEach(phrase => rows.push(renderRow(phrase)));
    } else {
      rows.push(renderRow(word));
    }

    return rows;
  };

  const renderRow = (word: string) => {
    const fields = word
      .split("")
      .map((letter, index) => <Field key={index} isSpace={letter === " "} />);

    return <div className="flex">{fields}</div>;
  };

  return (
    <div className="flex flex-col">
      {renderWordField(quizState.currentQuiz.answer)}
    </div>
  );
};

export default Hangman;

import React from "react";
import { observer } from "mobx-react-lite";

import Field from "./Field";
import { quizState } from "../../state/quizState";

const Hangman = () => {
  const renderWordField = () => {
    const rows: JSX.Element[] = [];
    const word = quizState.currentQuiz.answer.join("");

    if (word.length > 10) {
      word.split(" ").forEach((phrase) => rows.push(renderRow(phrase)));
    } else {
      rows.push(renderRow(word));
    }

    return rows;
  };

  const renderRow = (word: string) => {
    const fields = word
      .split("")
      .map((letter, index) => (
        <Field key={index} isSpace={letter === " "} letter={letter} />
      ));

    return (
      <div className="flex" key={word}>
        {fields}
      </div>
    );
  };

  return <div className="flex flex-col">{renderWordField()}</div>;
};

export default observer(Hangman);

import React from "react";
import Field from "./Field/Field";

const Hangman = () => {
  const word = "react";

  const renderWordField = (word: string): any[] => {
    return word.split("").map((letter, index) => <Field key={index} />);
  };

  return <div className="flex mb-32">{renderWordField(word)}</div>;
};

export default Hangman;

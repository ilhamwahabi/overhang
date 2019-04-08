import React from "react";
import { observer } from "mobx-react-lite";

import { guessState } from "../../../../state/guessState";

const Field = ({ isSpace, letter }: { isSpace: boolean; letter: string }) => {
  let classname = `      
    w-16 h-16 mx-4 mb-10 border-b-4 pb-2
    flex justify-center align-center text-5xl
  `;

  if (!isSpace) classname += " border-orange";
  else classname += " border-transparent";

  const renderLetter = (letter: string) => {
    if (guessState.correctGuess.includes(letter)) {
      return letter.toUpperCase();
    }
  };

  return <div className={classname}>{renderLetter(letter)}</div>;
};

export default observer(Field);

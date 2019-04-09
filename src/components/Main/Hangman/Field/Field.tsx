import React from "react";
import { observer } from "mobx-react-lite";
import cx from "classnames";

import { guessState } from "../../../../state/guessState";
import { themeState } from "../../../../state/themeState";

const Field = ({ isSpace, letter }: { isSpace: boolean; letter: string }) => {
  const renderLetter = (letter: string) => {
    if (guessState.correctGuess.includes(letter)) {
      return letter.toUpperCase();
    }
  };

  return (
    <div
      className={cx(
        "w-16",
        "h-16",
        "mx-4",
        "mb-10",
        "border-b-4",
        "pb-2",
        "flex",
        "justify-center",
        "align-center",
        "text-5xl",
        { "border-orange": !isSpace },
        { "border-transparent": isSpace },
        `text-${themeState.secondary}`
      )}
    >
      {renderLetter(letter)}
    </div>
  );
};

export default observer(Field);

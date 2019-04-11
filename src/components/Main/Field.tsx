import React from "react";
import { observer } from "mobx-react-lite";
import cx from "classnames";

import { guessState } from "../../state/guessState";
import { themeState } from "../../state/themeState";

const Field = ({ isSpace, letter }: { isSpace: boolean; letter: string }) => {
  const renderLetter = () => {
    if (guessState.correctGuess.includes(letter)) {
      return letter.toUpperCase();
    }
  };

  return (
    <div
      className={cx(
        "w-3",
        "h-8",
        "md:w-16",
        "md:h-16",
        "mx-2",
        "md:mx-4",
        "mb-10",
        "border-b-4",
        "pb-2",
        "flex",
        "justify-center",
        "align-center",
        "text-xl",
        "md:text-5xl",
        { [`border-${themeState.tertiary}`]: !isSpace },
        { "border-transparent": isSpace },
        `text-${themeState.secondary}`
      )}
    >
      {renderLetter()}
    </div>
  );
};

export default observer(Field);

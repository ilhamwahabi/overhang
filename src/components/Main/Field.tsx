import React from "react";
import { observer } from "mobx-react-lite";
import clsx from "clsx";

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
      className={clsx(
        `
          cursor-default leading-regular
          text-xl md:text-4xl lg:text-5xl
          w-3 h-8 md:w-8 md:h-16 lg:w-16 lg:h-16
          mx-2 md:mx-3 lg:mx-4 mb-10
          pb-2 md:pb-3
          flex justify-center align-center
          border-b-4
        `,
        { "border-blue-dark": !isSpace && themeState.theme === "light" },
        { "border-orange": !isSpace && themeState.theme === "dark" },
        { "border-transparent": isSpace },
        { "text-black": themeState.theme === "light" },
        { "text-white": themeState.theme === "dark" }
      )}
    >
      {renderLetter()}
    </div>
  );
};

export default observer(Field);

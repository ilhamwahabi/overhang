import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import cx from "classnames";

import { guessState } from "../../../state/guessState";
import { quizState } from "../../../state/quizState";
import { themeState } from "../../../state/themeState";
import { keyboardState } from "../../../state/keyboardState";

const KeyPress = () => {
  const [key, setKey] = useState<string | null>(null);

  const onKeyPress = (event: KeyboardEvent) => {
    const loweredKey = event.key.toLowerCase();

    if (quizState.result) return;

    if (loweredKey.length === 1 && loweredKey.match(/[a-z]/)) {
      setKey(loweredKey);

      const condition = guessState.addGuessedLetter(loweredKey);
      if (condition === "levelup")
        setTimeout(() => {
          setKey("");
        }, 1000);
      else if (condition === "lose") {
        setTimeout(() => {
          setKey("");
        }, 1000);
      }
    } else setKey("invalid");
  };

  useEffect(() => {
    document.addEventListener("keypress", onKeyPress);

    return () => {
      document.removeEventListener("keypress", onKeyPress);
    };
  }, []);

  const renderText = (status: "correct" | "wrong" | null) => {
    if (key === null) {
      return (
        <p
          className={cx(
            "text-base",
            "md:text-2xl",
            "h-32",
            "flex",
            "justify-center",
            "items-center",
            `text-${themeState.secondary}`
          )}
        >
          Press any key to guess the letter
        </p>
      );
    } else if (key === "invalid") {
      return (
        <p
          className={cx(
            "text-2xl",
            "md:text-4xl",
            "border-red",
            "border-b-2",
            "h-16",
            "md:h-32",
            "flex",
            "justify-center",
            "items-center",
            `text-${themeState.secondary}`
          )}
        >
          invalid key
        </p>
      );
    } else {
      return (
        <p
          className={cx(
            "border-b-2",
            "w-16",
            "h-16",
            "md:w-32",
            "md:h-32",
            "text-4xl",
            "md:text-6xl",
            "align-middle",
            "flex",
            "justify-center",
            "items-center",
            `border-${themeState.secondary}`,
            { [`border-${themeState.tertiary}`]: status === "correct" },
            { "border-red": status === "wrong" },
            `text-${themeState.secondary}`
          )}
        >
          {key}
        </p>
      );
    }
  };

  return keyboardState.isOpen ? null : (
    <div>{renderText(guessState.guessStatus)}</div>
  );
};

export default observer(KeyPress);

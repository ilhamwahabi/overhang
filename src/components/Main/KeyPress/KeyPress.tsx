import React, { useState, useEffect } from "react";
import { guessState } from "../../../state/guessState";
import { quizState } from "../../../state/quizState";

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
          setKey(null);
        }, 500);
      }
    } else setKey("invalid");
  };

  useEffect(() => {
    document.addEventListener("keypress", onKeyPress);

    return () => {
      document.removeEventListener("keypress", onKeyPress);
    };
  }, []);

  const renderText = () => {
    if (key === null) {
      return (
        <p className="text-2xl h-32 flex justify-center items-center">
          Press any key to guess the letter
        </p>
      );
    } else if (key === "invalid") {
      return (
        <p
          className="
            text-4xl border-red border-b-2 h-32 
            flex justify-center items-center
          "
        >
          invalid key
        </p>
      );
    } else {
      return (
        <p
          className="
            border-orange border-b-2 
            w-32 h-32 
            text-6xl align-middle
            flex justify-center items-center
          "
        >
          {key}
        </p>
      );
    }
  };

  return <div>{renderText()}</div>;
};

export default KeyPress;

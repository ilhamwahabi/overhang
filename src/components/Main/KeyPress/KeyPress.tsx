import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
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
    let keyClassname = `
      border-b-2 w-32 h-32 
      text-6xl align-middle
      flex justify-center items-center
    `;
    switch (status) {
      case "correct":
        keyClassname += " border-orange";
        break;
      case "wrong":
        keyClassname += " border-red";
        break;
    }

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
      return <p className={keyClassname}>{key}</p>;
    }
  };

  return <div>{renderText(guessState.guessStatus)}</div>;
};

export default observer(KeyPress);

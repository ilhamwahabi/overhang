import React from "react";
import { observer } from "mobx-react-lite";
import SimpleKeyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import clsx from "clsx";

import { ReactComponent as DownArrow } from "../svg/arrow.svg";
import { guessState } from "../state/guessState";
import { keyboardState } from "../state/keyboardState";
import { themeState } from "../state/themeState";

const Keyboard = () => {
  const onKeyPress = (button: any) => {
    document.dispatchEvent(new KeyboardEvent("keypress", { key: button }));
  };

  const buttonTheme = [
    {
      class: `text-black`,
      buttons: "Q W E R T Y U I O P A S D F G H J K L Z X C V B N M",
    },
  ];

  if (guessState.wrongGuess.length > 0) {
    buttonTheme.push({
      class: `hg-red text-white`,
      buttons: guessState.wrongGuess.join(" ").toUpperCase(),
    });
  }

  if (guessState.correctGuess.length > 0) {
    buttonTheme.push({
      class: `hg-blue text-white`,
      buttons: guessState.correctGuess.join(" ").toUpperCase(),
    });
  }

  return (
    <div className="w-3/4 md:w-1/2 mt-5">
      <SimpleKeyboard
        onKeyPress={onKeyPress}
        buttonTheme={buttonTheme}
        layout={{
          default: [
            "Q W E R T Y U I O P",
            "A S D F G H J K L",
            "Z X C V B N M",
          ],
        }}
      />
      <DownArrow
        onClick={keyboardState.toggle.bind(keyboardState)}
        className={clsx(
          `mx-auto mt-4 w-4 md:w-6 h-auto cursor-pointer`,
          { "arrow-blue-dark": themeState.theme === "light" },
          { "arrow-orange": themeState.theme === "dark" }
        )}
      />
    </div>
  );
};

export default observer(Keyboard);

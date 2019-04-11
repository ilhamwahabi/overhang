import React from "react";
import { observer } from "mobx-react-lite";
import cx from "classnames";

import { themeState } from "../state/themeState";

const Title = () => {
  return (
    <div
      className={`
        text-2xl md:text-3xl p-4 fixed pin-t pin-l 
        text-${themeState.secondary}
      `}
    >
      Over Hangman
    </div>
  );
};

export default observer(Title);

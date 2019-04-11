import React from "react";
import { observer } from "mobx-react-lite";

import { ReactComponent as DownArrow } from "../svg/arrow.svg";
import { themeState } from "../state/themeState";
import { keyboardState } from "../state/keyboardState";

const Direction = () => {
  function openKeyboard() {
    keyboardState.toggle();
  }

  return (
    <div className="flex flex-col items-center justify-center fixed pin-b pin-x mb-12 md:mb-4">
      <p
        className={`
          text-sm md:text-base mb-2 md:mb-4
          text-${themeState.secondary}
        `}
      >
        {keyboardState.isOpen
          ? "Close Virtual Keyboard"
          : "Open Virtual Keyboard"}
      </p>
      <DownArrow
        onClick={openKeyboard}
        style={{
          transform: keyboardState.isOpen ? "rotate(0deg)" : "rotate(180deg)"
        }}
        className={`
          w-4 md:w-6 h-auto cursor-pointer
          arrow-${themeState.tertiary}
        `}
      />
    </div>
  );
};

export default observer(Direction);

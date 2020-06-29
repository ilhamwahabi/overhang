import React from "react";
import { observer } from "mobx-react-lite";
import cx from "classnames";

import { ReactComponent as DownArrow } from "../svg/arrow.svg";
import { themeState } from "../state/themeState";
import { keyboardState } from "../state/keyboardState";

const Direction = () => {
  return (
    <div className="flex flex-col items-center justify-center fixed bottom-0 inset-x-0 mb-12 md:mb-4">
      <p
        className={cx(
          `text-sm md:text-base mb-2 md:mb-4 leading-regular`,
          { "text-black": themeState.theme === "light" },
          { "text-white": themeState.theme === "dark" }
        )}
      >
        {keyboardState.isOpen
          ? "Close Virtual Keyboard"
          : "Open Virtual Keyboard"}
      </p>
      <DownArrow
        onClick={keyboardState.toggle.bind(keyboardState)}
        style={{
          transform: keyboardState.isOpen ? "rotate(0deg)" : "rotate(180deg)",
        }}
        className={cx(
          `w-4 md:w-6 h-auto cursor-pointer`,
          { "arrow-blue-dark": themeState.theme === "light" },
          { "arrow-orange": themeState.theme === "dark" }
        )}
      />
    </div>
  );
};

export default observer(Direction);

import React from "react";
import { observer } from "mobx-react-lite";
import clsx from "clsx";

import { ReactComponent as DownArrow } from "../svg/arrow.svg";
import { themeState } from "../state/themeState";
import { keyboardState } from "../state/keyboardState";

const Direction = () => {
  return (
    <div className="flex flex-col items-center justify-center fixed bottom-0 inset-x-0 mb-12 md:mb-4">
      <div
        className="flex flex-col items-center justify-center cursor-pointer"
        onClick={keyboardState.toggle.bind(keyboardState)}
      >
        <p
          className={clsx(
            `text-sm md:text-base mb-2 md:mb-4 leading-regular tracking-wide`,
            { "text-black": themeState.theme === "light" },
            { "text-white": themeState.theme === "dark" }
          )}
        >
          {keyboardState.isOpen ? "Close Keyboard" : "Open Keyboard"}
        </p>
        <DownArrow
          style={{
            transform: keyboardState.isOpen ? "rotate(0deg)" : "rotate(180deg)",
          }}
          className={clsx(
            `w-4 md:w-6 h-auto cursor-pointer`,
            { "arrow-blue-dark": themeState.theme === "light" },
            { "arrow-orange": themeState.theme === "dark" }
          )}
        />
      </div>
    </div>
  );
};

export default observer(Direction);

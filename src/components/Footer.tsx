import React from "react";
import { observer } from "mobx-react-lite";
import cx from "classnames";

import { themeState } from "../state/themeState";
import { ReactComponent as GithubLogo } from "../svg/github.svg";

const Footer = () => {
  return (
    <a
      href="https://github.com/iwgx/over-hangman"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className={cx(
          `pl-4 pb-4 fixed bottom-0 left-0 text-center leading-regular flex items-center text-sm md:text-xl`,
          { "text-black": themeState.theme === "light" },
          { "text-white": themeState.theme === "dark" }
        )}
      >
        Made by Ilham Wahabi
        <GithubLogo
          className="w-4 h-4 ml-2 lg:w-5 lg:h-5 lg:ml-3 inline"
          fill={themeState.theme === "light" ? "black" : "white"}
        />
      </div>
    </a>
  );
};

export default observer(Footer);

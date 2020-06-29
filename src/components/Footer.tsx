import React from "react";
import { observer } from "mobx-react-lite";
import cx from "classnames";

import { themeState } from "../state/themeState";
import { ReactComponent as GithubLogo } from "../svg/github.svg";

const Footer = () => {
  return (
    <a href="https://github.com/iwgx/over-hangman">
      <div
        className={cx(
          `pl-5 pb-5 fixed bottom-0 left-0 text-center leading-regular flex text-sm md:text-xl`,
          { "text-black": themeState.theme === "light" },
          { "text-white": themeState.theme === "dark" }
        )}
      >
        Made by Ilham Wahabi
        <GithubLogo
          className="w-5 h-5 ml-2 pt-1 inline"
          fill={themeState.theme === "light" ? "black" : "white"}
        />
      </div>
    </a>
  );
};

export default observer(Footer);

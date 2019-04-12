import React from "react";
import { observer } from "mobx-react-lite";

import { themeState } from "../state/themeState";
import { ReactComponent as GithubLogo } from "../svg/github.svg";

const Footer = () => {
  return (
    <a href="https://github.com/iwgx/over-hangman">
      <div
        className={`
          pl-5 pb-5 fixed pin-b pin-l text-center
          text-${themeState.secondary} text-sm md:text-xl
        `}
      >
        Made by Ilham Wahabi
        <GithubLogo className="w-5 h-5 ml-2 pt-1" fill={themeState.secondary} />
      </div>
    </a>
  );
};

export default observer(Footer);

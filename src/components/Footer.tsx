import React from "react";
import { observer } from "mobx-react-lite";
import clsx from "clsx";

import { themeState } from "../state/themeState";
import { ReactComponent as GithubLogo } from "../svg/github.svg";
import { ReactComponent as TwitterLogo } from "../svg/twitter.svg";

const Footer = () => {
  return (
    <footer>
      <div
        className={clsx(
          `pl-4 pb-4 fixed bottom-0 left-0 text-center leading-regular flex items-center text-sm md:text-xl`,
          { "text-black": themeState.theme === "light" },
          { "text-white": themeState.theme === "dark" }
        )}
      >
        <a href="https://iwgx.io/" target="_blank" rel="noopener noreferrer">
          &copy; 2019 Ilham Wahabi
        </a>
        <a
          href="https://github.com/iwgx/over-hangman"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 lg:ml-3"
        >
          <GithubLogo
            className="w-4 h-4 lg:w-5 lg:h-5"
            fill={themeState.theme === "light" ? "black" : "white"}
          />
        </a>
        <a
          href="https://twitter.com/ilhamwahabigx"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 lg:ml-3"
        >
          <TwitterLogo
            className="w-4 h-4 lg:w-5 lg:h-5"
            fill={themeState.theme === "light" ? "black" : "white"}
          />
        </a>
      </div>
    </footer>
  );
};

export default observer(Footer);

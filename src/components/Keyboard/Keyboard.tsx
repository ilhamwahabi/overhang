import React from "react";
import { observer } from "mobx-react-lite";
import SimpleKeyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

import { themeState } from "../../state/themeState";

const Keyboard = () => {
  return (
    <SimpleKeyboard
      buttonTheme={[
        {
          class: `text-black`,
          buttons: "Q W E R T Y U I O P A S D F G H J K L Z X C V B N M"
        }
      ]}
      layout={{
        default: [
          "Q W E R T Y U I O P",
          "A S D F G H J K L ",
          "Z X C V B N M   "
        ]
      }}
    />
  );
};

export default observer(Keyboard);

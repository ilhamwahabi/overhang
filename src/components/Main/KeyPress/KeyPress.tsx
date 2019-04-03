import React, { useEffect } from "react";

const KeyPress = () => {
  const onKeyPress = (event: KeyboardEvent) => {
    const loweredKey = event.key.toLowerCase();

    if (loweredKey.match(/[a-z]/)) console.log(loweredKey);
    else console.log("Not valid key");
  };

  useEffect(() => {
    document.addEventListener("keypress", onKeyPress);

    return () => {
      document.removeEventListener("keypress", onKeyPress);
    };
  }, []);

  return <div className="text-2xl">Press any key to guess the letter</div>;
};

export default KeyPress;

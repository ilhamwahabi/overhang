import React from "react";
import { scoreState } from "../../state/scoreState";
import { observer } from "mobx-react";

const Score = () => {
  return (
    <div className="text-6xl fixed pin-t pin-r p-4">{scoreState.score}</div>
  );
};

export default observer(Score);

import React from "react";
import { scoreState } from "../../state/scoreState";

const Score = () => {
  return (
    <div className="text-6xl fixed pin-t pin-r p-4">{scoreState.score}</div>
  );
};

export default Score;

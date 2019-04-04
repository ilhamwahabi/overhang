import React from "react";
import { quizState } from "../../state/quizState";

const Stage = () => {
  const renderStageDot = (totalStage: number) => {
    return new Array(totalStage).fill(true).map((el, index) => {
      let classname = "border-orange w-4 h-4 my-4";
      classname += index + 1 === quizState.stage ? " border-8" : " border-2";

      return (
        <div
          className={classname}
          style={{ borderRadius: "50%" }}
          key={index}
        />
      );
    });
  };

  return <div className="fixed p-l p-y mx-4">{renderStageDot(5)}</div>;
};

export default Stage;

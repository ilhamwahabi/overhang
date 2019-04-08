import React from "react";
import { observer } from "mobx-react-lite";
import FlipMove from "react-flip-move";

import { quizState } from "../../state/quizState";

const Stage = () => {
  const renderStageDot = () => {
    return Array.from({ length: 5 - quizState.stage }).map((el, index) => {
      let classname = "border-orange w-4 h-4 my-4 border-2";
      return (
        <div
          className={classname}
          style={{ borderRadius: "50%" }}
          key={index}
        />
      );
    });
  };

  const renderFinishedStage = () => {
    return Array.from({ length: quizState.stage }).map((el, index) => {
      let classname = "border-orange w-4 h-4 my-4 border-8";
      return (
        <div
          className={classname}
          style={{ borderRadius: "50%" }}
          key={index}
        />
      );
    });
  };

  return (
    <div className="fixed p-l p-y mx-4">
      <FlipMove>
        {renderFinishedStage()}
        {renderStageDot()}
      </FlipMove>
    </div>
  );
};

export default observer(Stage);

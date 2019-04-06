import React from "react";
import { observer } from "mobx-react";
import { quizState } from "../../state/quizState";

const Result = () => {
  const renderResult = (result: "win" | "lose" | null) => {
    switch (result) {
      case "win":
        return <span className="text-8xl text-blue">WIN</span>;
      case "lose":
        return <span className="text-8xl text-red">LOSE</span>;
    }
  };

  return (
    quizState.result && (
      <>
        <div
          className="fixed z-20"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
        >
          <span className="text-8xl">YOU</span> {renderResult(quizState.result)}
        </div>
        <div className="fixed w-screen h-screen bg-grey-darkest opacity-75 z-10" />
      </>
    )
  );
};

export default observer(Result);

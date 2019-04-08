import React from "react";
import { observer } from "mobx-react-lite";
import { quizState } from "../../state/quizState";
import Anime from "react-anime";

const Result = () => {
  const renderResult = (result: "win" | "lose" | null) => {
    let resultComponent;
    switch (result) {
      case "win":
        resultComponent = (
          <span className="text-8xl text-blue inline-block">WIN</span>
        );
        break;
      case "lose":
        resultComponent = (
          <span className="text-8xl text-red inline-block">LOSE</span>
        );
        break;
    }

    return (
      <Anime
        easing="easeOutElastic"
        duration={750}
        direction="normal"
        delay={350}
        translateY={["100vh", "0"]}
      >
        {resultComponent}
      </Anime>
    );
  };

  const getBackdropClassname = (result: "lose" | "win") => {
    let backdropClassname = "fixed w-screen h-screen opacity-75 z-10";
    switch (quizState.result) {
      case "win":
        backdropClassname += " bg-blue-darkest";
        break;
      case "lose":
        backdropClassname += " bg-red-darkest";
        break;
    }
    return backdropClassname;
  };

  return (
    quizState.result && (
      <>
        <div
          className="fixed z-20"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none"
          }}
        >
          <Anime
            easing="easeOutElastic"
            duration={750}
            direction="normal"
            translateY={["-100vh", "0"]}
          >
            <span className="text-8xl inline-block">YOU</span>
          </Anime>{" "}
          {renderResult(quizState.result)}
        </div>
        <div
          className={getBackdropClassname(quizState.result)}
          onClick={() => quizState.reset()}
        />
      </>
    )
  );
};

export default observer(Result);

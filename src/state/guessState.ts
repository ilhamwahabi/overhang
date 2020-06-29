import { action, observable } from "mobx";
import _ from "lodash";

import { quizState } from "./quizState";
import { chanceState } from "./chanceState";

class GuessState {
  @observable
  correctGuess: string[] = [];

  @observable
  wrongGuess: string[] = [];

  @observable
  guessStatus: "correct" | "wrong" | null = null;

  @observable
  isChecking: boolean = false;

  @action
  addGuessedLetter(letter: string): "levelup" | "lose" | "" {
    const answer = _(quizState.currentQuiz.answer).uniq().without(" ").value();

    this.isChecking = true;

    if (quizState.currentQuiz.answer.includes(letter)) {
      this.guessStatus = "correct";
      if (!this.correctGuess.includes(letter)) {
        this.correctGuess.push(letter);
      }

      if (this.correctGuess.length === answer.length) {
        setTimeout(() => {
          this.resetGuess();

          if (quizState.stage < 5) quizState.levelUp();
          else if (quizState.stage === 5) quizState.result = "win";
          this.isChecking = false;
        }, 1000);
        return "levelup";
      }
    } else {
      this.guessStatus = "wrong";
      if (!this.wrongGuess.includes(letter)) {
        this.wrongGuess.push(letter);

        if (chanceState.chance === 1) {
          setTimeout(() => {
            this.correctGuess = [...answer];
          }, 250);

          setTimeout(() => {
            quizState.result = "lose";
            this.isChecking = false;
            this.resetGuess();
          }, 1000);
          chanceState.decreaseChance();
          return "lose";
        }
        if (chanceState.chance > 0) chanceState.decreaseChance();
      }
    }

    this.isChecking = false;

    return "";
  }

  @action
  resetGuess() {
    this.correctGuess = [];
    this.wrongGuess = [];
    this.guessStatus = null;
  }
}

export const guessState = new GuessState();

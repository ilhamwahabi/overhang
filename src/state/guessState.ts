import { action, observable } from "mobx";
import _ from "lodash";
import { quizState } from "./quizState";
import { chanceState } from "./chanceState";

class GuessState {
  @observable
  correctGuess: string[] = [];

  @observable
  wrongGuess: string[] = [];

  @action
  addGuessedLetter(letter: string): "levelup" | "lose" | "" {
    const answer = _(quizState.currentQuiz.answer)
      .uniq()
      .without(" ")
      .value();

    if (quizState.currentQuiz.answer.includes(letter)) {
      if (!this.correctGuess.includes(letter)) {
        this.correctGuess.push(letter);
      }

      if (this.correctGuess.length === answer.length) {
        setTimeout(() => {
          this.resetGuess();

          if (quizState.stage < 5) quizState.levelUp();
          else if (quizState.stage === 5) quizState.result = "win";
        }, 1000);
        return "levelup";
      }
    } else {
      if (!this.wrongGuess.includes(letter)) {
        this.wrongGuess.push(letter);

        if (chanceState.chance === 1) {
          setTimeout(() => {
            this.correctGuess = [...answer];
          }, 250);

          setTimeout(() => {
            quizState.result = "lose";
            this.resetGuess();
          }, 1000);
          chanceState.decreaseChance();
          return "lose";
        }
        if (chanceState.chance > 0) chanceState.decreaseChance();
      }
    }
    return "";
  }

  @action
  resetGuess() {
    this.correctGuess = [];
    this.wrongGuess = [];
  }
}

export const guessState = new GuessState();

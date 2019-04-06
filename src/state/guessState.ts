import { action, observable } from "mobx";
import _ from "lodash";
import { quizState } from "./quizState";
import { chanceState } from "./chanceState";
import { scoreState } from "./scoreState";

class GuessState {
  @observable
  correctGuess: string[] = [];

  @observable
  wrongGuess: string[] = [];

  @action
  addGuessedLetter(letter: string) {
    if (quizState.currentQuiz.answer.includes(letter)) {
      if (!this.correctGuess.includes(letter)) {
        this.correctGuess.push(letter);
        scoreState.addScore(20);
      }

      const answerLength = _(quizState.currentQuiz.answer)
        .uniq()
        .without(" ")
        .value().length;

      if (this.correctGuess.length === answerLength) {
        setTimeout(() => {
          this.resetGuess();
        }, 1000);
        return true;
      }
    } else {
      this.wrongGuess.push(letter);

      if (chanceState.chance === 1)
        setTimeout(() => {
          quizState.result = "lose";
        }, 500);
      if (chanceState.chance > 0) chanceState.decreaseChance();
    }
    return false;
  }

  @action
  resetGuess() {
    this.correctGuess = [];
    this.wrongGuess = [];

    if (quizState.stage < 5) quizState.levelUp();
    else if (quizState.stage === 5) quizState.result = "win";
  }
}

export const guessState = new GuessState();

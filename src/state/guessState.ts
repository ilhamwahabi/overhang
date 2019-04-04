import { action, observable } from "mobx";
import { quizState } from "./quizState";

class GuessState {
  @observable
  correctGuess: string[] = [];

  @observable
  wrongGuess: string[] = [];

  @action
  addGuessedLetter(letter: string) {
    if (quizState.currentQuiz.answer.includes(letter)) {
      this.correctGuess.push(letter);
    } else {
      this.wrongGuess.push(letter);
    }

    console.log(letter);
    console.log(quizState);
    console.log(this);
  }

  @action
  resetGuess() {
    this.correctGuess = [];
    this.wrongGuess = [];
  }
}

export const guessState = new GuessState();

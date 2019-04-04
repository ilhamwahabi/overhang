import { action, observable } from "mobx";

class GuessState {
  @observable
  guess: string[] = [];

  @observable
  guessedWord: string[] = [];

  @action
  addGuess(newGuess: string) {
    this.guess.push(newGuess);
  }

  @action
  fillGuessedWord(letter: string, index: number) {
    this.guessedWord[index] = letter;
  }

  @action
  resetGuess() {
    this.guessedWord = [];
    this.guess = [];
  }
}

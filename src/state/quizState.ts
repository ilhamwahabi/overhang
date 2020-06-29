import { action, observable } from "mobx";
import { shuffle, take, map } from "lodash-es";

import Quiz from "../class/Quiz";
import { chanceState } from "./chanceState";
import { quiz } from "../data/quiz";

class QuizState {
  @observable
  stage: number;

  @observable
  quizzes: Quiz[];

  @observable
  currentQuiz: Quiz;

  @observable
  result: "win" | "lose" | null;

  constructor() {
    this.quizzes = this.getQuizzes();
    this.stage = 1;
    this.result = null;
    this.currentQuiz = this.quizzes[this.stage - 1];
  }

  @action
  getQuizzes() {
    const randomFiveQuizzes = take(shuffle(quiz), 5);
    return map(
      randomFiveQuizzes,
      ({ hint, answers }) => new Quiz(hint, answers)
    );
  }

  @action
  levelUp() {
    this.stage++;
    this.currentQuiz = this.quizzes[this.stage - 1];
  }

  @action
  reset() {
    this.quizzes = this.getQuizzes();
    this.stage = 1;
    this.result = null;
    this.currentQuiz = this.quizzes[this.stage - 1];
    chanceState.chance = 5;
  }
}

export const quizState = new QuizState();

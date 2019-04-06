import { action, observable } from "mobx";
import _ from "lodash";
import Quiz from "../class/Quiz";
import { chanceState } from "./chanceState";

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
    return _.shuffle([
      new Quiz("Javascript framework", ["React", "Angular", "Vue"]),
      new Quiz("React core team", ["Dan Abramov"]),
      new Quiz("CSS framework", ["Bootstrap", "Bulma", "Foundation"]),
      new Quiz("Web browser", ["Brave", "Chrome"]),
      new Quiz("Code hosting platform", ["Gitlab", "Github", "Bitbucket"])
    ]);
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

import { action, observable } from "mobx";

class ScoreState {
  @observable
  score: number = 0;

  @action
  addScore(point: number) {
    this.score += point;
  }

  @action
  resetScore() {
    this.score = 0;
  }
}

export const scoreState = new ScoreState();

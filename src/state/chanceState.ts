import { action, observable } from "mobx";

class ChanceState {
  @observable
  chance: number = 5;

  @observable
  resetChance() {
    this.chance = 5;
  }

  @observable
  decreaseChance() {
    if (this.chance > 0) this.chance--;
  }
}

export const chanceState = new ChanceState();

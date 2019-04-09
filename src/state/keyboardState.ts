import { observable, action } from "mobx";

class KeyboardState {
  @observable
  isOpen: boolean = false;

  @action
  toggle() {
    this.isOpen = !this.isOpen;
  }
}

export const keyboardState = new KeyboardState();

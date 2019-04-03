import { action, observable } from "mobx";

class ThemeState {
  @observable
  theme: string = "dark";

  @action
  changeTheme(theme: string) {
    this.theme = theme;
  }
}

export const themeState = new ThemeState();

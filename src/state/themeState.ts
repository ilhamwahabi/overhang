import { action, observable } from "mobx";

class ThemeState {
  @observable
  theme: "light" | "dark" = "dark";

  @action
  changeTheme(theme: "light" | "dark") {
    this.theme = theme;
  }
}

export const themeState = new ThemeState();

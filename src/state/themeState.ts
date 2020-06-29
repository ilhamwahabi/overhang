import { action, observable } from "mobx";

type theme = "light" | "dark";

class ThemeState {
  @observable
  theme: theme = (localStorage.getItem("overhangman_theme") as theme) || "dark";

  @action
  changeTheme(theme: theme) {
    this.theme = theme;
    localStorage.setItem("overhangman_theme", theme);
  }
}

export const themeState = new ThemeState();

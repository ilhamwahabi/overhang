import { action, observable, computed } from "mobx";

class ThemeState {
  @observable
  theme: "light" | "dark" = "dark";

  @action
  changeTheme(theme: "light" | "dark") {
    this.theme = theme;
  }

  @computed
  get primary() {
    switch (this.theme) {
      case "light":
        return "white";
      case "dark":
        return "black";
    }
  }
}

export const themeState = new ThemeState();

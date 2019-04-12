import { action, observable, computed } from "mobx";

class ThemeState {
  @observable
  theme: "light" | "dark" =
    (localStorage.getItem("overhangman_theme") as ("light" | "dark")) || "dark";

  @action
  changeTheme(theme: "light" | "dark") {
    this.theme = theme;
    localStorage.setItem("overhangman_theme", theme);
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

  @computed
  get secondary() {
    switch (this.theme) {
      case "light":
        return "black";
      case "dark":
        return "white";
    }
  }

  @computed
  get tertiary() {
    switch (this.theme) {
      case "light":
        return "blue-dark";
      case "dark":
        return "orange";
    }
  }
}

export const themeState = new ThemeState();

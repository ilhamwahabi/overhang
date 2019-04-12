import { action, observable, computed } from "mobx";

type theme = "light" | "dark";
type primary = "white" | "black";
type secondary = "black" | "white";
type tertiary = "blue-dark" | "orange";

class ThemeState {
  @observable
  theme: theme = (localStorage.getItem("overhangman_theme") as theme) || "dark";

  @action
  changeTheme(theme: theme) {
    this.theme = theme;
    localStorage.setItem("overhangman_theme", theme);
  }

  @computed
  get primary(): primary {
    switch (this.theme) {
      case "light":
        return "white";
      case "dark":
        return "black";
    }
  }

  @computed
  get secondary(): secondary {
    switch (this.theme) {
      case "light":
        return "black";
      case "dark":
        return "white";
    }
  }

  @computed
  get tertiary(): tertiary {
    switch (this.theme) {
      case "light":
        return "blue-dark";
      case "dark":
        return "orange";
    }
  }
}

export const themeState = new ThemeState();

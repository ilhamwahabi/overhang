import React from "react";
import ReactDOM from "react-dom";
import splitbee from "@splitbee/web";
import "typeface-oswald";

import "./index.css";
import "./tailwind.css";
import App from "./components/App";

splitbee.init({
  scriptUrl: "/bee.js",
  apiUrl: "/_hive",
});

ReactDOM.render(<App />, document.getElementById("root"));
